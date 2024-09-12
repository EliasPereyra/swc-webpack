import path from "node:path";
import { fileURLToPath } from "node:url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcPath = path.resolve(__dirname, "src");

export default {
  entry: `${srcPath}/index.jsx`,
  mode: "development",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  devServer: {
    compress: true,
    port: 9000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          // instead of using babel-loader, where we need a .babelrc file
          // we need a .swrrc file
          loader: "swc-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: path.join(__dirname, "public/index.html"),
    }),
  ],
};
