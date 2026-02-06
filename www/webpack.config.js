const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js",
    clean: true,
  },
  mode: "development",
  experiments: {
    // wasm-bindgen's bundler target does a static ESM import of the .wasm.
    // webpack 5 requires explicitly enabling sync WebAssembly for that form.
    syncWebAssembly: true,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "index.html" }],
    }),
  ],
  devServer: {
    port: 8080,
    static: {
      directory: __dirname,
    },
  },
};
