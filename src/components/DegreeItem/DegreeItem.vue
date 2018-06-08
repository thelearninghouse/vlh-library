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
            <div
              @keyup.enter="handleLink"
              @click="handleLink"
              class="degree-item-cta"
              v-text="ctaText"
              tabindex="0">
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

    ctaText: {
      type: String,
      default: 'View Info'
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
    handleLink() {
      window.location.href = this.item.url
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
    margin: 10px;
    flex-flow: row wrap;
    width: 100%;
    flex: 1 1 45%;
    min-width: 280px;
    max-width: 375px;

    @media (min-width: 800px) {
      width: 320px;
      flex: none;
      min-width: 320px;
    }
    &-link {
      padding: 1em;
      width: 100%;
      text-decoration: none;
      color: initial;
      z-index: 1;
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


      &.transition-complete {
        overflow: visible;
      }
      // display: flex;
      // flex-direction: row;
      // align-content: space-around;
      // justify-content: flex-start;
      // flex-flow: row wrap;
    }

    &-cta {
        margin-top: 1em;
        display: inline-flex;
        justify-content: flex-start;
    }

    &.open {
      .degree-item-content {
        padding-top: 1em;
        // overflow: visible;
      }
    }

    .button-icon {
      background: none;
      padding: 0;
      border-radius: 50%;
    }
}
</style>
