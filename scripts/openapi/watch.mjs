import { spawn } from "node:child_process";
import chokidar from "chokidar";

const watched = [
  "assets/openapi/qweather-apis-zh.yml",
  "assets/openapi/qweather-apis-en.yml",
  "assets/openapi/examples"
];

let running = false;
let pending = false;

function runScript(script) {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, [script], {
      stdio: "inherit"
    });

    child.on("exit", (code) => {
      if (code !== 0) {
        console.error(`${script} failed with exit code ${code}`);
      }
      resolve(code);
    });
  });
}

async function generate() {
  if (running) {
    // Coalesce rapid save events into one extra run after the current generation
    // finishes, avoiding concurrent writes to assets/openapi/generated.
    pending = true;
    return;
  }

  running = true;
  // API docs use the parsed OpenAPI model. Swagger UI reads the source YAML
  // directly, so no separate Swagger-specific spec is generated.
  await runScript("scripts/openapi/generate-parsed-openapi.mjs");
  running = false;

  if (pending) {
    pending = false;
    generate();
  }
}

const watcher = chokidar.watch(watched, {
  ignoreInitial: true,
  // Polling avoids exhausting native file-watch handles in large workspaces.
  usePolling: true,
  interval: 300,
  awaitWriteFinish: {
    stabilityThreshold: 150,
    pollInterval: 50
  }
});

watcher.on("all", (event, file) => {
  if (file.startsWith("assets/openapi/examples/") && !file.endsWith(".json")) return;
  console.log(`OpenAPI ${event}: ${file}`);
  generate();
});

watcher.on("error", (error) => {
  console.error("OpenAPI watcher error:", error);
});

console.log(`Watching ${watched.join(", ")}`);
