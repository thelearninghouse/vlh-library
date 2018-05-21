// require('./docs-mixin.js');
const path = require('path')
const ResolveFix = {
      extensions: [".js", ".vue"],
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    };

module.exports = {
	components: 'src/components/**/[A-Z]*.vue',
  mixins: ['src/mixins/degreeMixin.js', 'docs-mixin.js'],
	require: [
		path.join(__dirname, 'docs-helpers/extra.css')
	],
  webpackConfig: {
		resolve: ResolveFix,
    module: {
			rules: [
				{
					test: /\.vue$/,
					loader: 'vue-loader',
				},
				{
					test: /\.js?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader', 'sass-loader'],
				},
				{
					test: /\.scss$/,
					use: ['style-loader', 'css-loader', 'sass-loader'],
				},
				{
					test: /\.svg$/,
					use: ['vue-svg-loader']
				}
			],
      // rules: [
      //   // Vue loader
      //   {
      //     test: /\.vue$/,
      //     exclude: /node_modules/,
      //     loader: "vue-loader"
      //   },
      //   {
			// 		test: /\.svg$/,
			// 		use: ['vue-svg-loader']
			// 	}
      // ]
    }
  },
  showUsage: true,
	showCode: true,
	styleguideDir: "docs",
};
