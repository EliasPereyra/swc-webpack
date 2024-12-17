import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const dirname = import.meta.dirname;
const srcPath = path.join(dirname, "src");

export default {
  entry: `${srcPath}/index.jsx`,
  mode: "development",
  output: {
    path: path.join(dirname, "dist"),
    filename: "index_bundle.js",
  },
  devServer: {
    compress: true,
    port: 9000,
    hot: true,
    historyApiFallback: true,
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
      template: path.join(dirname, "public/index.html"),
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.join(dirname, "src"),
    },
  },
};
