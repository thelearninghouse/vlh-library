import mqMixin from './mixins/mqMixin.js'
import degreeMixin from './mixins/degreeMixin.js'
import './assets/styles/styles.scss'

const Components = require.context("@/components/", true, /\.vue$/)
const VlhComponents = []

Components.keys().forEach(key => VlhComponents.push(Components(key).default))

const VlhLibrary = {
  install(Vue, options) {
    VlhComponents.forEach(component => Vue.component(component.name, component))
    Vue.mixin(mqMixin)
  }
};

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VlhLibrary)
}

// export axios;
export default VlhLibrary;

export {
  // AccordionTransition,
  // FilterList,
  // FilterItem,
  // FilterListHeading,
  // FilterReset,
  // DegreeList,
  // DegreeItem,
  // Icon,
  // SearchFilter,
  degreeMixin
}
