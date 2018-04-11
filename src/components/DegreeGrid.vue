<template>
  <component :is="type" class="degree-grid">

    <transition-group name="demo" tag="ul" class="degree-grid-list" appear
      @before-enter="beforeEnter"
      @after-enter="afterEnter"
      @enter-cancelled="afterEnter"
      >

      <slot name="filter-grid-items">
        <degree-grid-item
          v-for="(item, index) in items"
          :data-index="index"
          :key="item.id"
          :item="item">
        </degree-grid-item>
      </slot>
    </transition-group>

  </component>
</template>

<script>
/**
 * Filtering for an array of items
 */
export default {
  name: "DegreeGrid",
  version: "ready",
  props: {
    /**
     * The array of items to be used for the filtering.
     */
    items: {
      type: Array,
      required: true
    },
    width: {
      type: String
    },
    /**
     * The html element name used for the icon
     */
    type: {
      type: String,
      default: "div",
    },
  },
  methods: {
    beforeEnter(el) {
      el.style.transitionDelay = 15 * el.dataset.index + 'ms'
    },
    afterEnter(el) {
      el.style.transitionDelay = ''
    },
    beforeLeave(el) {
      var { marginLeft, marginTop, width, height } = window.getComputedStyle(el)
      el.style.left = el.offsetLeft - parseFloat(marginLeft, 10) + 'px'
      el.style.top = el.offsetTop - parseFloat(marginTop, 10) + 'px'
      el.style.width = width
      el.style.height = height
    }
  },
  computed: {
    listStyle() {
      return {width: this.width}
    }

  },
}
</script>

<style lang="scss" scoped>
.degree-grid-list {
  perspective: 3000px;
  perspective-origin: 50% 50%;
}
</style>

<docs>
  ```vue
<DegreeGrid :items="degrees"/>
  ```
</docs>
