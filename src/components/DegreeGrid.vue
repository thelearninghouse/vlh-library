<template>
  <component :is="type" class="degree-grid">
    <transition-group name="company" tag="ul" class="content__list filter-grid-list">
      <slot name="filter-grid-items">
        <degree-grid-item v-for="item in items" :key="item.id" :item="item"></degree-grid-item>
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
  computed: {
    listStyle() {
      return {width: this.width}
    }

  },
}
</script>

<style lang="scss" scoped>
</style>

<docs>
  ```jsx
<filter-grid></filter-grid>
  ```
</docs>
