<template>
  <main id="app" class="content">

    <div class="degreeFilters">

      <SearchFilter v-model="currentDegreeSearchFilter"></SearchFilter>

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

    <DegreeList :items="degreeList"/>
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
      currentDegreeSearchFilter: '',
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
			let c = new Set(this.filteredDegreesBySearch);
      let intersection = new Set(
				[...a].filter(x => b.has(x) && c.has(x))
			);
			return [...intersection]
    },

    filteredDegreesBySearch() {
      if (!this.currentDegreeSearchFilter) return this.wpDegrees

      return this.wpDegrees.filter(degree => {
				let title = degree.post_title
				return title.toLowerCase().includes(this.currentDegreeSearchFilter.toLowerCase())
			})
		},

    filteredDegreesByArea() {
      if (!this.currentDegreeAreaFilter) return this.wpDegrees

      return this.wpDegrees.filter(degree => {
        let DegreeAreas = degree.areas
        return DegreeAreas.includes(this.currentDegreeAreaFilter.term_id);
      });
    },

    filteredDegreesByLevel() {
      if (!this.currentDegreeLevelFilter) return this.wpDegrees

      return this.wpDegrees.filter(degree => {
        let DegreeLevels = degree.levels
        return DegreeLevels.includes(this.currentDegreeLevelFilter.term_id);
      });
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
  .degree-list {
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
