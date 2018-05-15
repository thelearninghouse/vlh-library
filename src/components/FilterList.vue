<template>
  <ul class="filter-list">
    <filter-reset-item
      :class="{selected: !selectedFilter}"
      :selectedItem="selectedFilter"
      :handle-reset="handleReset">
    </filter-reset-item>
    <!-- :class="{selected: selectedFilter === item.term_id}" -->
    <filter-list-item
      v-for="(item, index) in list"
      :selectedItem="selectedFilter"
      :handle-selected="handleSelected"
      :key="index"
      :item="item">
    </filter-list-item>
  </ul>
</template>

<script>
export default {
  inject: ['wpData'],

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
  },
  computed: {
    injectedValue() {
      return this.wpData.degreeLevels
    }
  }
}
</script>
<style>
  p {
    font-size: 18px;
  }
</style>
