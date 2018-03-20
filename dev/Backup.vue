<template>
<main id="app" class="content">
  <nav class="nav">
    <menu class="nav__controls">
      <icon class="nav__icon" use="#filter"></icon>

      <li v-for="(active, menu) in menus" class="nav__label" :class="{
            'nav__label--active' : active,
            'nav__label--filter': activeFilters[menu].length
          }" @click="setMenu(menu, active)">
        {{ menu }}
      </li>

      <li class="nav__label nav__label--clear" @click="clearAllFilters">Clear all</li>
    </menu>

    <label class="nav__label" @click="modal = !modal">About this pen</label>
  </nav>
  <div class="degreeFilters levels">
    <h2>Degree Levels</h2>
    <ul class="filter-list">
      <li class="filter-option filter-button">
        <label class="filter-option__title" for="all-levels-filter">All</label>
        <input id="all-levels-filter" type="radio" value="" v-model.lazy.number="currentDegreeLevelFilter">
      </li>
      <li class="filter-option filter-button" v-for="(option, key) in degreeFilters.degree_levels">
        <label class="filter-option__title" :for="key" v-text="option.name"></label>
        <input :id="key" :key="key" type="radio" :value="key" v-model.lazy.number="currentDegreeLevelFilter">
      </li>
    </ul>
  </div>


  <div class="degreeFilters levels">
    <h2>Degree Levels</h2>
    <ul class="filter-list">
      <li class="filter-option filter-button">
        <label class="filter-option__title" for="all-levels-filter">All</label>
        <input id="all-levels-filter" type="radio" value="" v-model.lazy.number="currentDegreeLevelFilter">
      </li>
      <li class="filter-option filter-button" v-for="(option, key) in degreeFilters.degree_levels">
        <label class="filter-option__title" :for="key" v-text="option.name"></label>
        <input :id="key" :key="key" type="radio" :value="key" v-model.lazy.number="currentDegreeLevelFilter">
      </li>
    </ul>
  </div>
  <transition-group name="dropdown" tag="section" class="dropdown" :style="dropdown">
    <menu v-for="(options, filter) in filters" class="filters" v-show="menus[filter]" ref="menu" :key="filter">

      <li v-if="filter === 'rating'" class="filters__rating">
        <output>
            <label>Minimum rating:&nbsp;</label>
            {{ parseFloat(filters.rating).toFixed(1) }}
          </output>

        <input v-model="filters.rating" class="filters__range" type="range" :min="rating.min" :max="rating.max" step="0.1" />
      </li>

      <template v-else>
          <li v-for="(active, option) in options" class="filters__item"
            :class="{ 'filters__item--active': active }"
            @click="setFilter(filter, option)">
            {{ option }}
          </li>
        </template>
    </menu>
  </transition-group>
  <!-- <pre>{{degrees}}</pre> -->


  <DegreeGrid :items="degreeList"/>

  <transition name="modal">
    <section v-if="modal" class="modal" @click="modal = false">
      <article class="modal__content" @click.stop>
        <h4 class="modal__title">For the full tutorial</h4>
        <h4 class="modal__title">that goes with this pen</h4>

        <h5 class="modal__link" @click="modal = false">
            <a href="https://snipcart.com/blog/vuejs-transitions-animations" target="_blank">
              Creating Vue.js Transitions &amp; Animations
            </a>
          </h5>

        <button class="modal__close" @click="modal = false">&times;</button>
      </article>
    </section>
  </transition>
</main>
</template>

<script>
import axios from 'axios'

axios.defaults.baseURL =
  "https://onlineuwa.staging.wpengine.com/wp-json/wp/v2/";

export default {
  data() {
    return {
      modal: false,
      companies: [],
      degrees: [],
      currentDegreeLevelFilter: '',
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
        verticals: {},
        degree_levels: {},
        degree_types: {}
      },
      menus: {
        countries: false,
        categories: false,
        rating: false
      }
    }
  },
  created: function() {
    axios
      .all([
        this.getDegrees(),
        this.getDegreeLevels(),
        this.getDegreeVerticals()
      ])
      .then(
        axios.spread((degrees, levels, verticals) => {
          const degreesArray = degrees.data;
          this.degrees = degreesArray;

          degreesArray.forEach(({
            degree_levels,
            degree_types,
            levels,
            verticals
          }) => {
            degree_levels.forEach(degree_level => {
              this.$set(this.degreeFilters.degree_levels, degree_level.term_id, degree_level);
            });

            degree_types.forEach(degree_type => {
              this.$set(this.degreeFilters.degree_types, degree_type.term_id, degree_type);
            });

            levels.forEach(level => {
              this.$set(this.degreeFilters.levels, level, false);
            });

            verticals.forEach(vertical => {
              this.$set(this.degreeFilters.verticals, vertical, false);
            });

          });


          // this.degreeLevels = levels.data
          // this.degreeVerticals = verticals.data
        })
      );
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
      let degreeLevelFilter = this.currentDegreeLevelFilter;

      if (degreeLevelFilter) {
        return this.degrees.filter(({levels, verticals}) => {
          if (!levels.length) {
            return true;
          }
          return levels.includes(degreeLevelFilter);
        });
      } else {
        return this.degrees
      }
    },

    filteredDegreesByLevel() {
      if (this.currentDegreeLevelFilter) {
        return this.degrees.filter(({levels, verticals}) => {
          if (!levels.length) {
            return true;
          }
          return levels.includes(this.currentDegreeLevelFilter);
        });
      } else {
        return this.degrees
      }
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
  .degreeFilters.levels {
      position: fixed;
      left: 20px;
      top: 20px;
      width: 300px;
  }
  main.content {
    margin-right: 12%;
  }
</style>
