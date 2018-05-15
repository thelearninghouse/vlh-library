<template>
  <component :is="elementType" class="filter-item filter-reset">
    <div class="label" @click="handleReset">
      <icon class="selected-icon" v-if="!selectedItem" icon="Check"></icon>
      <span v-html="label"></span>
    </div>
  </component>
</template>

<script>
export default {
  name: 'FilterReset',

  props: {

    id: {
      type: String,
    },

    label: {
      type: String,
      default: 'All'
    },

    elementType: {
      type: String,
      default: "div",
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
