const Path = require('path')
const ResolveFix = {
      extensions: [".js", ".vue"],
      alias: {
        "@": Path.resolve(__dirname, "./src")
      }
    };

module.exports = {
  // Always disable extracting css
  // extractCSS: false,

  webpack(config) {
    config.resolve = ResolveFix
    return config
  },

  extendWebpack(config) {
  	// Remove exisiting
  	config.module.rules.delete('svg')
  	// Add your own
  	config.module.rule('svg')
  		.test(/\.svg$/)
  		.use('vue-svg-loader')
  			.loader('vue-svg-loader')
  }
}
