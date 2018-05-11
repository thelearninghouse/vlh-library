<template>
<main id="app" class="content">

  <div class="degreeFilters">

    <div class="filter-list-wrapper list-1">
      <h2>Degree Levels</h2>

      <filter-reset-item
        @reset="currentDegreeLevelFilter = 'all'"
        id="all-levels"
        :class="{selected: !currentDegreeLevelFilter}"
        label="All Leves">
      </filter-reset-item>

<!-- :selectedFilter.sync="currentDegreeLevelFilter" -->
      <filter-list-item
        @selected="updateDegreeLevelFilter"
        v-for="(option, index) in wpDegreeLevels"
        :key="index"
        :class="{selected: currentDegreeLevelFilter == index}"
        :option="option">
      </filter-list-item>
    </div>

    <div class="filter-list-wrapper list-2">
      <h2>Degree Areas</h2>

      <filter-reset-item
        @reset="currentDegreeAreaFilter = 'all'"
        id="all-areas"
        :class="{ selected: !currentDegreeAreaFilter }"
        label="All Areas">
      </filter-reset-item>

      <FilterListItem
        @selected="updateDegreeAreaFilter"
        v-for="(option, index) in wpDegreeAreas"
        :class="{selected: currentDegreeAreaFilter == index}"
        :key="index"
        :option="option"/>
      </FilterListItem>
    </div>
  </div>

  <DegreeGrid :items="degreeList"/>

</main>
</template>

<script>
import axios from 'axios'
import wpData from '../wpDataMock.js'

const Degrees = wpData.degrees
const DegreeLevels = wpData.degreeLevels
const DegreeAreas = wpData.degreeAreas

const DegreesArray = Degrees.map((degree, index) => {
  var levelsArray = [];
  var areasArray = [];

  if (degree.degree_levels) {
    levelsArray = degree.degree_levels.map(level => level.term_id )
  }

  if (degree.degree_areas) {
    areasArray = degree.degree_areas.map(area => area.term_id )
  }

  degree['levels'] = levelsArray
  degree['areas'] = areasArray
  return degree
})

axios.defaults.baseURL =
  "https://onlineuwa.staging.wpengine.com/wp-json/wp/v2/";

export default {
  data() {
    return {
      wpDegrees: Degrees,
      wpDegreeLevels: DegreeLevels,
      wpDegreeAreas: DegreeAreas,
      modal: false,
      companies: [],
      degrees: [],
      currentDegreeLevelFilter: 'all',
      currentDegreeAreaFilter: 'all',
      dropdown: {
        height: 0
      },
      rating: {
        min: 10,
        max: 0
      },
      filters: {
        countries: {},
        categories: {},
        rating: 0
      },
      degreeFilters: {
        levels: {},
        areas: {},
        degree_levels: {},
        degree_areas: {}
      },
      menus: {
        countries: false,
        categories: false,
        rating: false
      }
    }
  },
  created: function() {

  },

  computed: {
    activeMenu() {
      return Object.keys(this.menus).reduce(
        ($, set, i) => (this.menus[set] ? i : $), -1
      );
    },

    valueCheck() {
      return this.currentDegreeLevelFilter + 3;
    },
    list() {
      let {
        countries,
        categories
      } = this.activeFilters;

      return this.companies.filter(({
        country,
        keywords,
        rating
      }) => {
        if (rating < this.filters.rating) return false;
        if (countries.length && !~countries.indexOf(country)) return false;
        return (!categories.length || categories.every(cat => ~keywords.indexOf(cat)));
      });
    },

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
      // let filteredDegrees = this.wpDegrees.filter(degree => {
			// 	if (activeDegreeAreaFilter === 'all') {
			// 		return degree;
			// 	}
			// 	let areasOfStudyForDegree = degree.verticals;
			// 	return areasOfStudyForDegree.includes(activeDegreeAreaFilter.term_id);
			// });
			// return filteredDegrees;

      // if (!this.currentDegreeAreaFilter) { return this.wpDegrees}

      let filteredDegrees = this.wpDegrees.filter(degree => {
        if (this.currentDegreeAreaFilter === 'all') {
					return degree;
				}
        let DegreeAreas = degree.areas
        return DegreeAreas.includes(this.currentDegreeAreaFilter);
      });
      return filteredDegrees
    },

    filteredDegreesByLevel() {

      let filteredDegrees = this.wpDegrees.filter(degree => {
        if (this.currentDegreeLevelFilter === 'all') {
					return degree;
				}
        let DegreeLevels = degree.levels
        return DegreeLevels.includes(this.currentDegreeLevelFilter);
      });
      return filteredDegrees

      // if (!this.currentDegreeLevelFilter) { return this.wpDegrees}
      //
      // return this.wpDegrees.filter(({levels}) => {
      //   if (!levels.length) {
      //     return;
      //   }
      //   return levels.includes(this.currentDegreeLevelFilter);
      // });
    },

    activeFilters() {
      let {
        countries,
        categories
      } = this.filters;

      return {
        countries: Object.keys(countries).filter(c => countries[c]),
        categories: Object.keys(categories).filter(c => categories[c]),
        rating: this.filters.rating > this.rating.min ? [this.filters.rating] : []
      };
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
    activeMenu(index, from) {
      if (index === from) return;

      this.$nextTick(() => {
        if (!this.$refs.menu || !this.$refs.menu[index]) {
          this.dropdown.height = 0;
        } else {
          this.dropdown.height = `${this.$refs.menu[index].clientHeight +
            16}px`;
        }
      });
    }
  },
  methods: {
    updateDegreeLevelFilter(val) {
      console.log('updateDegreeLevelFilter', val);
      this.currentDegreeLevelFilter = val
    },

    updateDegreeAreaFilter(val) {
      this.currentDegreeAreaFilter = val
    },

    getDegrees() {
      return axios.get("/degrees?per_page=50");
    },

    getDegreeLevels() {
      return axios.get("/levels?per_page=50");
    },

    getDegreeVerticals() {
      return axios.get("/verticals?per_page=50");
    },

    async getApiData() {
      const degreesPromise = axios(
        "https://onlineuwa.staging.wpengine.com/wp-json/wp/v2/degrees?per_page=50"
      );
      const verticalsPromise = axios(
        "https://onlineuwa.staging.wpengine.com/wp-json/wp/v2/verticals?per_page=50"
      );
      const levelsPromise = axios(
        "https://onlineuwa.staging.wpengine.com/wp-json/wp/v2/levels?per_page=50"
      );
      // await all three promises to come back and destructure the result into their own variables
      const [degrees, verticals, levels] = await Promise.all([
        degreesPromise,
        verticalsPromise,
        levelsPromise
      ]);
    },
    setFilter(filter, option) {
      if (filter === "countries") {
        this.filters[filter][option] = !this.filters[filter][option];
      } else {
        setTimeout(() => {
          this.clearFilter(filter, option, this.filters[filter][option]);
        }, 100);
      }
    },

    clearFilter(filter, except, active) {
      if (filter === "rating") {
        this.filters[filter] = this.rating.min;
      } else {
        Object.keys(this.filters[filter]).forEach(option => {
          this.filters[filter][option] = except === option && !active;
        });
      }
    },

    clearAllFilters() {
      Object.keys(this.filters).forEach(this.clearFilter);
    },

    setMenu(menu, active) {
      Object.keys(this.menus).forEach(tab => {
        this.menus[tab] = !active && tab === menu;
      });
    }
  },
  beforeMount() {
    fetch("https://s3-us-west-2.amazonaws.com/s.cdpn.io/450744/mock-data.json")
      .then(response => response.json())
      .then(companies => {
        this.companies = companies;

        companies.forEach(({
          country,
          keywords,
          rating
        }) => {
          this.$set(this.filters.countries, country, false);

          if (this.rating.max < rating) this.rating.max = rating;
          if (this.rating.min > rating) {
            this.rating.min = rating;
            this.filters.rating = rating;
          }

          keywords.forEach(category => {
            this.$set(this.filters.categories, category, false);
          });
        });
      });
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
