const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "app.js",
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
};
