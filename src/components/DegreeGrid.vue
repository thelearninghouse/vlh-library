<template>
  <component :is="type" class="degree-grid">

    <transition-group name="animated-grid" tag="div" class="degree-grid-list" appear>
      <DegreeGridItem v-for="(item, index) in items" :key="item.ID" :item="item" />
    </transition-group>

  </component>
</template>

<script>
/**
 * Filtering for an array of items
 */
export default {
  name: "DegreeGrid",

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
      console.log('beforeEnter ran');
      el.style.transitionDelay = 25 * el.dataset.index + 'ms'
    },
    afterEnter(el) {
      console.log('afterEnter ran');

      el.style.transitionDelay = ''
    },
    beforeLeave(el) {
      console.log('beforeLeave ran');

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
