// require('./docs-mixin.js');
var path = require('path')
module.exports = {
	components: 'src/components/**/[A-Z]*.vue',
  mixins: ['docs-mixin.js'],
	require: [
		// path.join(__dirname, './dist/vlh-library.css')
	],
  webpackConfig: {
    module: {
      rules: [
        // Vue loader
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: "vue-loader"
        },
        {
					test: /\.svg$/,
					use: ['vue-svg-loader']
				}
      ]
    }
  },
  showUsage: true,
	showCode: true
};
