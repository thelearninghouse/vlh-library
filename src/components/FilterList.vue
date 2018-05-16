<template>
  <component :is="elementType" class="filter-list">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'FilterList',
  provide() {
    return {
      filterState: this.filterState
    }
  },

  data: () => ({
    filterState: {
      active: null,
      test: 1
    }
  }),

  watch: {
    'filterState.active': function (newFilter, oldFilter) {
      this.$emit('update:selectedFilter', newFilter)
    }
  },

  props: {
    /*
    * HTML Element to use for this compontent
     */
    elementType: {
      type: String,
      default: 'ul'
    },
    /*
    * HTML Array of filters for this filter group
     */
    list: {
      type: [Array, Object],
      // required: true
    },

    selectedFilter: {
      type: [Object, String, Number]
      // required: true
    }
  },

  methods: {
    handleSelected (item) {
      this.$emit('filter-selected', item)
    },

    handleReset () {
      this.$emit('filter-reset')
    }
  }
}
</script>
<style>
  p {
    font-size: 18px;
  }
</style>
