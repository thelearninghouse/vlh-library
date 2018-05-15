<template>
  <div class="filter-reset filter-item">
    <div class="label" @click="handleReset">
      <icon class="selected-icon" v-if="!selectedItem"  icon="Check"></icon>
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
      type: [Object, String, Number]
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
