<template>
  <transition-group id="degree-list-id" aria-live="false" name="animated-grid-items" :tag="elementType" class="degree-list" appear>
    <template v-if="ready">
      <slot></slot>
    </template>
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

    ready: Boolean
  }
}
</script>

<style lang="scss" scoped>
.degree-list {
    flex: 0 1 calc(100% - 430px);
    perspective: 3000px;
    perspective-origin: 50% 50%;
    display: flex;
    flex-flow: row wrap;
    align-content: start;
    align-items: start;
    padding-left: 0;
    justify-content: center;

    @media (min-width: 800px) {
      margin-left: auto;
      padding-left: 4em;
      justify-content: flex-start;
    }
}
</style>
