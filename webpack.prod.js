const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const terserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: ["./src/index.js"],
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanPlugin.CleanWebpackPlugin(),
  ],
  
  module: {
    rules:[
      {
        test:/\.css$/,
        use: ['style-loader',"css-loader"]
        
    },
      {
          test: /\.(png|jp(e*)g|svg)$/,  
          use: [{
              loader: 'url-loader',
              options: { 
                  limit: 8000, // Convert images < 8kb to base64 strings
                  name: 'assets/[hash]-[name].[ext]'
              } 
          }]
      },
  ]
  },

  optimization: {
    minimizer: [
      new terserPlugin(),
      new HtmlWebpackPlugin({
        template: "./template.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  }
};