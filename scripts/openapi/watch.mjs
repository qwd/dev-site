import { spawn } from "node:child_process";
import chokidar from "chokidar";

const watched = [
  "assets/openapi/qweather-apis-zh.yml",
  "assets/openapi/qweather-apis-en.yml",
  "assets/openapi/examples"
];

let running = false;
let pending = false;

function generate() {
  if (running) {
    pending = true;
    return;
  }

  running = true;
  const child = spawn(process.execPath, ["scripts/openapi/generate.mjs"], {
    stdio: "inherit"
  });

  child.on("exit", (code) => {
    running = false;
    if (code !== 0) {
      console.error(`OpenAPI generation failed with exit code ${code}`);
    }
    if (pending) {
      pending = false;
      generate();
    }
  });
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

console.log(`Watching ${watched.join(", ")}`);
