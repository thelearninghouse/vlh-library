<template>
  <component :is="elementType" class="degree-item" :class="[degreeClasses, {open: showContent}]">
    <a class="degree-item-link" :href="item.url">
      <slot :degree="item">
        <div class="degree-item-header">
          <h2 class="title" v-html="item.post_title"></h2>
          <button
            aria-label="Show Summary Info"
            class="button-icon"
            @click.prevent="showContent = !showContent">
            <icon role="presentation" :icon="toggleContentIcon" size="30px" color="#222"></icon>
          </button>
        </div>
        <accordion-transition>
          <div v-if="showContent" class="degree-item-content">
            <p>{{item.summary}}</p>
            <div class="degree-item-cta">
              View Info
            </div>
          </div>
        </accordion-transition>
      </slot>
    </a>
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
    showContent: false
  }),

  computed: {
    degreeClasses() {
      return this.getDegreeClasses(this.item)
    },

    toggleContentIcon() {
      if (this.showContent) {
        return 'remove-circle-outline'
      } else {
        return 'add-circle-outline'
      }
    }
  },
  methods: {
    handleLink(event) {
      console.log(event);
    },

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
    width: 320px;
    margin: 10px;
    border: 1px solid gray;
    flex-flow: row wrap;

    &-link {
      padding: 1em;
      width: 100%;
    }

    &-header {
      width: 100%;
      height: 35px;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: center;

      .title {
        width: 85%;
        font-size: 1em;
        font-weight: normal;
        margin-top: 0;
        margin-bottom: 0;
      }
    }

    &-content {
      transition: all 350ms ease-out;
      z-index: -1;
      position: relative;
      overflow: hidden;
    }

    &-cta {
        margin-top: 1em;
    }

    &.open {
      .degree-item-content {
        padding-top: 1em;;
      }
    }

    .button-icon {
      background: none;
      padding: 0;
      border-radius: 50%;
    }
}
</style>
