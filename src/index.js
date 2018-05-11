import FilterList from './components/FilterList.vue'
import FilterListItem from './components/FilterListItem.vue'
import FilterButton from './components/FilterButton.vue'
import FilterResetItem from './components/FilterResetItem.vue'
import DegreeGrid from './components/DegreeGrid.vue'
import DegreeGridItem from './components/DegreeGridItem.vue'
import Icon from './components/Icon.vue'
import './assets/styles/vd-finder.scss'

const VlhLibrary = {
  install(Vue, options) {
    Vue.component(DegreeGrid.name, DegreeGrid);
    Vue.component(DegreeGridItem.name, DegreeGridItem);
    Vue.component(FilterList.name, FilterList);
    Vue.component(FilterListItem.name, FilterListItem);
    Vue.component(FilterButton.name, FilterButton);
    Vue.component(FilterResetItem.name, FilterResetItem);
    Vue.component(Icon.name, Icon);
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
  FilterListItem,
  FilterButton,
  FilterResetItem,
  DegreeGrid,
  DegreeGridItem,
  Icon
}
