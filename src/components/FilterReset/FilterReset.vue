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
    /**
     * Set the id html attribute
     */
    id: {
      type: String
    },
    /**
     * The text used for this to label the list that is being reset
     */
    title: {
      type: String,
      default: 'All'
    },
    /**
     * The HTML element to use
     */
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
    /**
    * Gets called when filter reset is clicked.
    */
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
<!-- 
<docs>

```vue
<filter-reset title="All Levels"></filter-reset>
```

</docs> -->
