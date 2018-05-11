<template>
  <div class="filter-option">
    <button class="filter-button" :id="id" @click.prevent="updateFilter('all')">
      <span class="filter-option__title" v-html="label"></span>
    </button>
  </div>
</template>
<script>
export default {
  name: 'FilterResetItem',
  props: {
    id: {
      type: String,
    },
    label: {
      type: String,
      default: 'All'
    },
    selectedFilter: {
      type: [String, Number]
    },
  },
  methods: {
    /**
     * Resets filter for respective filter with that id
     * @event reset
     */
     updateFilter (selectedOption) {
       this.$emit('update:selectedFilter', selectedOption)
     }
  }
}
</script>
<style>
p {
  font-size: 18px;
}
</style>
