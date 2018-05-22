<template>
  <transition-group id="degree-list-id" aria-live="false" name="animated-grid-items" :tag="elementType" class="degree-list" appear>
    <slot></slot>
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
    degrees: {
      type: Array,
      // required: true
    },
    /**
     * The html element to use
     */
    elementType: {
      type: String,
      default: "ul",
    },
  }
}
</script>

<style lang="scss" scoped>
.degree-list {
    perspective: 3000px;
    perspective-origin: 50% 50%;
    display: flex;
    flex-flow: row wrap;
    align-content: start;
    align-items: start;
}
</style>
