<template>
  <component :is="elementType" class="filter-list">
    <FilterReset
      element-type="li"
      :class="{selected: !selectedFilter}"
      :selectedItem="selectedFilter"
      :handle-reset="handleReset">
    </FilterReset>
    <FilterItem
      v-for="(item, index) in list"
      :selectedItem="selectedFilter"
      :handle-selected="handleSelected"
      :item="item"
      :key="item.term_id">
    </FilterItem>
  </component>
</template>

<script>
export default {
  name: 'FilterList',

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
      required: true
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
