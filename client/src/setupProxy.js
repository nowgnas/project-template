const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  const port = 5000;
  console.log(`proxy ${port}`);
  app.use(
    "/api",
    createProxyMiddleware({
      target: `http://localhost:${port}`,
      changeOrigin: true,
    })
  );
};
