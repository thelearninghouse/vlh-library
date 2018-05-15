<template>
  <component :is="type" class="degree-grid">

    <transition-group name="animated-grid-items" tag="ul" class="degree-grid-list" appear>
      <slot name="filter-grid-items">
        <DegreeGridItem v-for="(item, index) in items" :key="item.id" :item="item" />
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
    }
  }
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
