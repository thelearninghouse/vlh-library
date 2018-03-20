<template>
  <component :is="tag" class="filter-list">
    <filter-list-item v-model="option.term_id" v-for="(option, key) in list" :key="option.term_id" :option="option"></filter-list-item>
  </component>
</template>
<script>
export default {
  name: 'FilterList',

  data() {
    return {
    }
  },
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
    }
  }
}
</script>
<style>
p {
  font-size: 18px;
}
</style>
