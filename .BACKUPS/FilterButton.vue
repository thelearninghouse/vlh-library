<template>
  <div class="filter-button" :id="option.term_id">
    <slot></slot>
    <span class="filter-option__title" v-html="option.name"></span>
  </div>
</template>
<script>
export default {
  name: 'FilterButton',
  props: {
    option: {
      type: [Object, Array],
      // required: true
    },
    selectedFilter: {
      type: [String, Number]
    },
    /*
     * The v-model attribute
     */
    value: {
      type: Number
    }
  },

  computed: {
    selectedFilterOption() {
      return this.selectedFilter
    }
  },

  methods: {
    updateFilter(selectedOption) {
      this.$emit('update:selectedFilter', selectedOption)
    }
  }
}
</script>
<style>
p {
  font-size: 18px;
}

.filter-button {
  text-align: left;
  width: 100%;
}
</style>

<docs>
  ```vue { "className": "checks" }
const filters = require('../../mockData/filter.js').default;

<div>
    <filter-list-item
      v-for="(option, index) in filters"
      :key="option.term_id"
      :option="option">
    </filter-list-item>
</div>
  ```

</docs>
