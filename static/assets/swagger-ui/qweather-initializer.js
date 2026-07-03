window.onload = function () {
  const specUrl = window.location.pathname.startsWith("/en/")
    ? "/assets/openapi/qweather-apis-en.yml"
    : "/assets/openapi/qweather-apis-zh.yml";

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark-mode");
  }

  const ui = SwaggerUIBundle({
    dom_id: "#swagger-ui",
    url: specUrl,
    deepLinking: true,
    docExpansion: "list",
    validatorUrl: null,
    presets: [
      SwaggerUIBundle.presets.apis,
    ],
    layout: "BaseLayout",
    queryConfigEnabled: false,
    requestInterceptor: function (request) {
      const curlOptions = Array.isArray(request.curlOptions)
        ? request.curlOptions
        : [];

      if (!curlOptions.includes("--compressed")) {
        request.curlOptions = [...curlOptions, "--compressed"];
      }

      return request;
    },
  });

  window.ui = ui;
};
