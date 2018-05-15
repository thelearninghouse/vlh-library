<template>
  <main id="app" class="content">

    <div class="degreeFilters">
      <div class="filter-list-wrapper">
        <h2>Degree Levels</h2>
        <FilterList
          :selectedFilter="currentDegreeLevelFilter"
          :list="wpDegreeLevels"
          @filter-selected="updateFilter"
          @filter-reset="currentDegreeLevelFilter = null">
        </FilterList>
        <span v-if="currentDegreeLevelFilter" v-html="currentDegreeLevelFilter.name"></span>
      </div>

      <div class="filter-list-wrapper">
        <h2>Degree Areas</h2>
        <FilterList
          :selectedFilter="currentDegreeAreaFilter"
          :list="wpDegreeAreas"
          @filter-selected="updateFilter"
          @filter-reset="currentDegreeAreaFilter = null">
        </FilterList>
        <span v-if="currentDegreeAreaFilter" v-html="currentDegreeAreaFilter.name"></span>
      </div>
    </div>

    <DegreeGrid :items="degreeList"/>
    <h1 class="no-results" v-if="!degreeList.length">No Matches</h1>
  </main>
</template>

<script>
import wpData from '../wpDataMock.js'
import {buildDegreeList} from './helpers.js'

const DegreeList = buildDegreeList(wpData.degrees);
const DegreeLevels = wpData.degreeLevels
const DegreeAreas = wpData.degreeAreas

export default {
  provide() {
    return {
      wpData: this.wpData
    }
  },

  data() {
    return {
      wpData: {
        degrees: DegreeList,
        degreeLevels: DegreeLevels,
        degreeAreas: DegreeAreas,
      },
      wpDegrees: DegreeList,
      wpDegreeLevels: DegreeLevels,
      wpDegreeAreas: DegreeAreas,
      degrees: [],
      currentDegreeLevelFilter: null,
      currentDegreeAreaFilter: null,
      degreeFilters: {
        levels: {},
        areas: {},
        degree_levels: {},
        degree_areas: {}
      }
    }
  },

  computed: {
    degreeList() {
      if ( !this.wpDegrees ) return []
			let a = new Set(this.filteredDegreesByArea);
			let b = new Set(this.filteredDegreesByLevel);
			// let c = new Set(this.currentDegreesBySearch);
			let intersection = new Set(
				[...a].filter(x => b.has(x))
			);
			return [...intersection]
    },

    filteredDegreesByArea() {
      let filteredDegrees = this.wpDegrees.filter(degree => {
        if (!this.currentDegreeAreaFilter) {
					return degree;
				}
        let DegreeAreas = degree.areas
        return DegreeAreas.includes(this.currentDegreeAreaFilter.term_id);
      });
      return filteredDegrees
    },

    filteredDegreesByLevel() {

      let filteredDegrees = this.wpDegrees.filter(degree => {
        if (!this.currentDegreeLevelFilter) {
					return degree;
				}
        let DegreeLevels = degree.levels
        return DegreeLevels.includes(this.currentDegreeLevelFilter.term_id);
      });
      return filteredDegrees
    },

    activeDegreeFilters() {
      let {
        levels,
        verticals
      } = this.degreeFilters;


      return {
        levels: this.filteredDegreesByLevel,
        verticals: this.degrees
      };

      return this.degrees.filter(({levels, verticals}) => {
        if (!levels.length) {
          return true;
        }
        return levels.includes(degreeLevelFilter);
      });

    }
  },

  watch: {
  },
  methods: {
    updateFilter(filterSelected) {
      // console.log(filterSelected);
      if (filterSelected.taxonomy === 'degree_vertical') {
        this.updateDegreeAreaFilter(filterSelected)
      } else {
        this.updateDegreeLevelFilter(filterSelected)
      }
    },

    updateDegreeLevelFilter(val) {
      this.currentDegreeLevelFilter = val
    },

    updateDegreeAreaFilter(val) {
      this.currentDegreeAreaFilter = val
    }
  }
}
</script>


<style lang="scss">
  /* Temporary */
  .degreeFilters {
    flex: 1 1 320px;
  }
  .degree-grid {
    flex: 1 1 calc(100% - 360px);
  }
  main.content {
    width: 1440px;
    display: flex;
    justify-content: space-between;
    margin: 4em auto;
    max-width: 100%;
    padding: 1.25em;
  }

</style>
