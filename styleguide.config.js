// require('./docs-mixin.js');
const Path = require('path')
const ResolveFix = {
      extensions: [".js", ".vue"],
      alias: {
        "@": Path.resolve(__dirname, "./src")
      }
    };

module.exports = {
	components: 'src/components/**/[A-Z]*.vue',
  mixins: ['docs-mixin.js'],
	require: [
		// path.join(__dirname, './dist/vlh-library.css')
	],
  webpackConfig: {
		resolve: ResolveFix,
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
	showCode: true,
	styleguideDir: "docs",
};
