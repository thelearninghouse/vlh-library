<template>
  <div class="filter-list-item">
    <div class="label" @click="handleReset">
      <span v-html="label"></span>
    </div>
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

    selectedItem: {
      type: [String, Number]
    },

    handleReset: Function,
  }
}
</script>
<style>
p {
  font-size: 18px;
}
</style>
