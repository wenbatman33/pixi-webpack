const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// const YYYY = new Date().getFullYear().toString();
// const MM = ((new Date().getMonth() + 1) < 10 ? `0${new Date().getMonth() + 1}` : `${(new Date().getMonth() + 1)}`);
// const DD = ((new Date().getDate()) < 10 ? `0${new Date().getDate()}` : `${(new Date().getDate())}`);
// const HH = ((new Date().getHours()) < 10 ? `0${new Date().getHours()}` : `${(new Date().getHours())}`);
// const mm = ((new Date().getMinutes()) < 10 ? `0${new Date().getMinutes()}` : `${(new Date().getMinutes())}`);
// process.env.BUILDTIME = `${YYYY}${MM}${DD}${HH}${mm}`;
// process.env.VERSION = (process.env.VER + process.env.BUILDTIME).toString();

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: ['./js/main.js'],
  // mode: 'none', // none development production
  output: {
    path: path.resolve(__dirname, 'oputput'),
    filename: 'game.min.[hash:8].js',
  },
  target: 'web',
  
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: 'assets/',to:'assets/'}
    ], {
      ignore: [],
      debug:'debug',
      copyUnmodified: true
    }),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      disable: process.env.NODE_ENV !== 'production',

      // optipng: {
      //   optimizationLevel: 4
      // },

      //seems better on mac this way
      pngquant: {
        verbose:true,
        quality: '80-90',
      }
    }),  
    new HtmlPlugin({
      file:path.join(__dirname,'dist','index.html'),
      template:'./index.html'
    })
  ]
}