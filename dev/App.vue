<template>
  <main id="app" class="content">
    <div class="degree-filters">

      <search-filter v-model="currentDegreeSearchFilter"></search-filter>

      <div class="filter-list-wrapper">
        <filter-heading
          @toggle-filter-visibility="handleFilterHeadingClick('showDegreeLevelFilter', 'showDegreeAreaFilter')"
          :selectedFilter.sync="currentDegreeLevelFilter"
          icon-dropdown-color="#cc1f1b"
          icon-reset-color="gray"
        >
          <h2 slot="header">Degree Levels</h2>
        </filter-heading>

        <div class="filter-list-status" v-if="currentDegreeLevelFilter && mobile">
          <span v-html="currentDegreeLevelFilter.name"></span>
          <icon class="icon-button" @click.native="currentDegreeLevelFilter = null" icon="clear-search" color="black"></icon>
        </div>

          <FilterList
            :visible.sync="showDegreeLevelFilter"
            :selected-filter.sync="currentDegreeLevelFilter">
            <FilterReset label="All Levels"></FilterReset>
            <FilterItem
              v-for="item in wpDegreeLevels"
              :item="item"
              :key="item.term_id">
            </FilterItem>
          </FilterList>
      </div>

      <div class="filter-list-wrapper">
        <filter-heading
          @toggle-filter-visibility="handleFilterHeadingClick('showDegreeAreaFilter', 'showDegreeLevelFilter')"
          :selectedFilter.sync="currentDegreeAreaFilter"
          icon-dropdown-color="#cc1f1b"
          icon-reset-color="gray"
        >
          <h2 slot="header">Degree Levels</h2>
        </filter-heading>

        <div class="filter-list-status" v-if="currentDegreeAreaFilter && mobile">
          <span v-html="currentDegreeAreaFilter.name"></span>
          <icon class="icon-button" @click.native="currentDegreeAreaFilter = null" icon="clear-search" color="black"></icon>
        </div>

        <FilterList
          :visible.sync="showDegreeAreaFilter"
          :selected-filter.sync="currentDegreeAreaFilter">
          <FilterReset label="All Levels"></FilterReset>
          <FilterItem
            v-for="item in wpDegreeAreas"
            :item="item"
            :key="item.term_id">
          </FilterItem>
        </FilterList>

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
      showDegreeLevelFilter: true,
      showDegreeAreaFilter: true,
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
    handleFilterHeadingClick(filterList, otherFilterList) {
      console.log('RANNN');
      console.log(filterList);
      if (!this.mobile) return
      if (otherFilterList) {
        this[otherFilterList] = false
      }
      this[filterList] = !this[filterList]
    },

    updateFilter(filterSelected) {
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
  .degree-filters {
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

  .filter-clear {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

</style>
