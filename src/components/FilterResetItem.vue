<template>
  <div class="filter-option">
    <button class="filter-button" :id="id" @click.prevent="resetFilter(id)">
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
    }
  },
  methods: {
    /**
     * Resets filter for respective filter with that id
     * @event reset
     */
    resetFilter(filterId) {
      this.$emit('reset', filterId)
    }
  }
}
</script>
<style>
p {
  font-size: 18px;
}
</style>
