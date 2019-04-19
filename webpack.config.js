var path = require("path");

module.exports = function (_, env) {
  var isProd = env.mode === "production";
  return {
    mode: isProd ? "production" : "development",
    entry: path.join(__dirname, "src", "index.jsx"),
    output: {
      path: path.join(__dirname, "dist"),
      filename: "[name].bundle.js",
    },
    devServer: {
      contentBase: path.join(__dirname, "src"),
      historyApiFallback: true,
      host: "0.0.0.0",
      port: 9000
    }
  }
}
