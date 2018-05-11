module.exports = {
  // Always disable extracting css
  // extractCSS: false,
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
