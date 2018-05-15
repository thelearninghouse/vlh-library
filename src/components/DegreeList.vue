<template>
  <transition-group name="animated-grid-items" :tag="elementType" class="degree-list" appear>
    <DegreeItem v-for="(item, index) in items" :item="item" :key="item.ID" />
  </transition-group>
</template>

<script>
/**
 * Filtering for an array of items
 */
export default {
  name: "DegreeList",

  props: {
    /**
     * The array of items to be used for the filtering.
     */
    items: {
      type: Array,
      required: true
    },
    /**
     * The html element name used for the icon
     */
    elementType: {
      type: String,
      default: "div",
    },
  }
}
</script>

<style lang="scss" scoped>
  .degree-list {
    perspective: 3000px;
    perspective-origin: 50% 50%;
  }
</style>

<docs>
  ```vue
<DegreeGrid :items="degrees"/>
  ```
</docs>
