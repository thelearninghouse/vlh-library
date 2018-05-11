<template>
  <ul class="filter-list">
    <filter-reset-item
      :class="{selected: selectedFilter === 'all'}"
      :handle-reset="handleReset">
    </filter-reset-item>
    <filter-list-item
      v-for="(item, index) in list"
      :selectedItem="selectedFilter"
      :class="{selected: selectedFilter === item.term_id}"
      :handle-selected="handleSelected" :key="index" :item="item">
    </filter-list-item>
  </ul>
</template>

<script>
export default {
  name: 'FilterList',

  props: {
    /*
    * HTML Element to use for this compontent
     */
    tag: {
      type: String,
      default: 'ul'
    },
    /*
    * HTML Array of filters for this filter group
     */
    list: {
      type: [Array, Object],
      required: true
    },

    selectedFilter: {
      type: [String, Number]
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
