<template>
  <component :is="elementType" class="degree-item" :class="[degreeClasses, {open: showSummary}]">
    <div class="degree-item-header">
      <h2 class="header-text" v-html="item.post_title"></h2>
      <!-- <div @click.native.stop="showSummary = !showSummary" class="summary-toggle"> -->
      <icon @click.native.stop="showSummary = !showSummary" class="summary-toggle" icon="ShowSubfilters"></icon>
      <!-- </div> -->
    </div>
    <div v-if="showSummary" class="degree-item-summary">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur officia laboriosam delectus est, beatae nemo eius suscipit debitis autem possimus, enim eum quae voluptatibus vel accusamus aliquam libero, sint fugiat perspiciatis excepturi. Dolorum quibusdam voluptatibus error dolore, laboriosam tempora deleniti.
    </div>
  </component>
</template>

<script>
/**
 * Filtering for an array of items
 */
export default {
  name: "DegreeItem",

  props: {
    /**
     * The object of data for an individual within the degrees array list
     */
    item: {
      required: true,
      type: Object
    },
    /**
     * The html element name used for the item
     */
    elementType: {
      type: String,
      default: "li",
    },
  },

  data: () => ({
    showSummary: false
  }),

  computed: {
    degreeClasses() {
      return this.getDegreeClasses(this.item)
    }
  },
  methods: {
    getDegreeClasses(degree) {
			let degreeLevels = degree.degree_levels
			let degreeTypes = degree.degree_areas

			let levels = degreeLevels.map(level => {
				return level.slug || ''
			})

			let types = degreeTypes.map(type => {
				if (type.slug) {
					return type.slug
				} else {
					return ''
				}
			})
			// return levels
			return levels.concat(types)
		}
  }
}
</script>

<style lang="scss" scoped>

.degree-item {
  display: inline-flex;
  vertical-align: top;
  background: #f5f5f5;
  border: 1px solid #eee;
  // align-items: center;
  // justify-content: center;
  height: 80px;
  width: 320px;
  margin: 10px;
  border: 1px solid gray;
  padding: 1em;
  flex-flow: row wrap;

  &.open {
    height: auto;
  }
}
.degree-item-header {
  width: 100%;
  // height: 100%;
  display: flex;
  flex-flow: row wrap;
  // align-content: stretch;
  justify-content: space-between;
  // align-items: center;
  margin-bottom: .75em;
  .header-text {
    width: 85%;
  }
}

.summary-toggle {
    cursor: pointer;
}
</style>

<docs>
  ```jsx
<degree-item v-for="item in items" :key="item.ID" :item="item"></degree-item>
  ```
</docs>
