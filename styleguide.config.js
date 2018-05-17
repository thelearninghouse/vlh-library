// require('./docs-mixin.js');

module.exports = {
  mixins: ['docs-mixin.js'],
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
