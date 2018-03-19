import FilterList from './components/FilterList.vue'
import Icon from './components/Icon.vue'
import './assets/styles/vd-finder.scss'

const VdFinder = {
  install(Vue, options) {
    Vue.component(FilterList.name, FilterList);
    Vue.component(Icon.name, Icon);
  }
};

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VdFinder)
}

// export axios;
export default VdFinder;

export {
  FilterList
}
