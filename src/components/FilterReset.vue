<template>
  <component :is="elementType" class="filter-item filter-reset" :class="{selected: isSelected}">
    <div class="label" @click="updateSelected">
      <icon class="selected-icon" v-if="isSelected" icon="Check"></icon>
      <span v-html="label"></span>
    </div>
  </component>
</template>

<script>
export default {
  name: 'FilterReset',

  inject: ['filterState'],

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
    }
  },

  computed: {
    filterListState() {
      return this.filterState
    },

    selectedFilter() {
      return this.filterState.active
    },

    isSelected() {
      return this.selectedFilter === null
    }
  },

  methods: {
    updateSelected() {
      this.filterState.active = null
    }
  }
}
</script>
<style>
  p {
    font-size: 18px;
  }
</style>
