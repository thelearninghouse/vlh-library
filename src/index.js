import FilterList from './components/FilterList.vue'
import FilterItem from './components/FilterItem.vue'
import FilterHeading from './components/FilterHeading.vue'
import FilterReset from './components/FilterReset.vue'
import DegreeList from './components/DegreeList.vue'
import DegreeItem from './components/DegreeItem.vue'
import Icon from './components/Icon.vue'
import SearchFilter from './components/SearchFilter.vue'
import AccordionTransition from './components/AccordionTransition.vue'
import './assets/styles/styles.scss'

const VlhLibrary = {
  install(Vue, options) {
    Vue.component(AccordionTransition.name, AccordionTransition);
    Vue.component(DegreeList.name, DegreeList);
    Vue.component(DegreeItem.name, DegreeItem);
    Vue.component(FilterList.name, FilterList);
    Vue.component(FilterItem.name, FilterItem);
    Vue.component(FilterHeading.name, FilterHeading);
    Vue.component(FilterReset.name, FilterReset);
    Vue.component(Icon.name, Icon);
    Vue.component(SearchFilter.name, SearchFilter);
  }
};

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VlhLibrary)
}

// export axios;
export default VlhLibrary;

export {
  AccordionTransition,
  FilterList,
  FilterItem,
  FilterHeading,
  FilterReset,
  DegreeList,
  DegreeItem,
  Icon,
  SearchFilter
}
