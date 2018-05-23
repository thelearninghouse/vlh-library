// src/mixins/degreeMixin.js

import buildDegreeList from '@/helpers/buildDegreeList.js'
import delay from '@/helpers/delay'

/**
 * @mixin
 */
export default {
  data: () => ({
    ready: false,
    degrees: [],
    degreeLevels: [],
    degreeAreas: [],
    currentDegreeLevelFilter: null,
    currentDegreeAreaFilter: null,
    currentDegreeSearchFilter: '',
    showDegreeLevelFilter: false,
    showDegreeAreaFilter: false
  }),

  computed: {
    /**
     * The array of degrees that is formed by all the filters
     */
    degreeList() {
      if (!this.degrees) return []
      let a = new Set(this.filteredDegreesByArea);
      let b = new Set(this.filteredDegreesByLevel);
      let c = new Set(this.filteredDegreesBySearch);
      let intersection = new Set(
        [...a].filter(x => b.has(x) && c.has(x))
      );
      return [...intersection]
    },

    filteredDegreesBySearch() {
      if (!this.currentDegreeSearchFilter) return this.degrees

      return this.degrees.filter(degree => {
        let title = degree.post_title
        return title.toLowerCase().includes(this.currentDegreeSearchFilter.toLowerCase())
      })
    },

    filteredDegreesByArea() {
      if (!this.currentDegreeAreaFilter) return this.degrees

      return this.degrees.filter(degree => {
        let DegreeAreas = degree.areas
        return DegreeAreas.includes(this.currentDegreeAreaFilter.term_id);
      });
    },

    filteredDegreesByLevel() {
      if (!this.currentDegreeLevelFilter) return this.degrees

      return this.degrees.filter(degree => {
        let DegreeLevels = degree.levels
        return DegreeLevels.includes(this.currentDegreeLevelFilter.term_id);
      });
    }
  },

  methods: {
    checkForUrlHash() {
      if (location.hash) {
        this.$nextTick()
        .then(() => {
          this.setInitialFilter();
        })
      } else {
        this.ready = true
      }
    },

    setInitialFilter() {
      let filterId = location.hash.replace('#', '');
      let initialFilterButton = document.getElementById(`button-${filterId}`)
      initialFilterButton.click();

      delay(100).then(()=> {
        this.ready = true
      });
    },

    createDegreeList(degreesArray) {
      return buildDegreeList(degreesArray)
    },

    handleFilterHeadingClick(filterList, otherFilterList) {
      if (!this.mobile) return
      if (otherFilterList) {
        this[otherFilterList] = false
      }
      this[filterList] = !this[filterList]
    },

    updateFilter(filterSelected) {
      if (filterSelected.taxonomy === 'degree_vertical') {
        this.currentDegreeAreaFilter = filterSelected
      } else {
        this.currentDegreeLevelFilter = filterSelected
      }
    }
  }
};
