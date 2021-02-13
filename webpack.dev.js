const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "eval-cheap-source-map",
  entry:["./src/index.js","./src/images.js"],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },

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
    }
]
},

  plugins: [
    new CleanPlugin.CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./template.html",
    }),
  ],

  
};