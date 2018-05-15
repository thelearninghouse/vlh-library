import FilterList from './components/FilterList.vue'
import FilterItem from './components/FilterItem.vue'
import FilterResetItem from './components/FilterResetItem.vue'
import DegreeGrid from './components/DegreeGrid.vue'
import DegreeGridItem from './components/DegreeGridItem.vue'
import Icon from './components/Icon.vue'
import SearchFilter from './components/SearchFilter.vue'
import './assets/styles/styles.scss'

const VlhLibrary = {
  install(Vue, options) {
    Vue.component(DegreeGrid.name, DegreeGrid);
    Vue.component(DegreeGridItem.name, DegreeGridItem);
    Vue.component(FilterList.name, FilterList);
    Vue.component(FilterItem.name, FilterItem);
    Vue.component(FilterResetItem.name, FilterResetItem);
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
  FilterList,
  FilterItem,
  FilterResetItem,
  DegreeGrid,
  DegreeGridItem,
  Icon,
  SearchFilter
}
