<template>
  <div class="filter-option">
    <button class="filter-button" :id="option.term_id" @click.prevent="updateValue(option.term_id)">
      <span class="filter-option__title" v-html="option.name"></span>
    </button>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'FilterListItem',
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
  methods: {
    updateValue(value) {
      console.log('RANN', value);
      this.$emit('selected', value)
      // this.$emit('input', Number(value))
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
