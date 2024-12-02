const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Entry point for the app
  output: {
    filename: "bundle.js", // Output file
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply Babel loader to all .js files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Resolve these file extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Template for HTML file
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"), // Replace 'public' with your directory
    },
    // Other dev server options...
    port: 3000, // Change as needed
    hot: true, // Enable hot reloading
  },
  mode: "development", // Set to production for optimized builds
};
