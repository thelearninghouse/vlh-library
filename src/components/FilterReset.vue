<template>
  <component :is="elementType" class="filter-item filter-reset" :class="{selected: isSelected}">
    <div class="filter-item-content" @click="updateSelected">
      <icon class="selected-indicator" v-if="isSelected" icon="check"></icon>
      <span class="title" v-html="title"></span>
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

    title: {
      type: String,
      default: 'All'
    },

    elementType: {
      type: String,
      default: "li",
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

<docs>

  ```vue
<filter-reset label="All Levels"></filter-reset>
  ```
</docs>
