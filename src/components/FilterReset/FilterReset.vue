<template>
  <component
    role="presentation"
    :is="elementType"
    class="filter-item filter-reset all"
    :class="{selected: isSelected}"
  >
    <div
      :id="`button-${filterId}`"
      tabindex="0"
      role="button"
      class="filter-item-content"
      @keyup.enter="updateSelected"
      @click="updateSelected"
      :aria-pressed="isSelected ? 'true' : 'false'"
    >
      <span class="selected-indicator">
        <icon class="selected-indicator-icon" v-if="isSelected" icon="check"></icon>
      </span>
      <span class="title" v-html="title"></span>
    </div>
  </component>
</template>

<script>
export default {
  // inheritAttrs: false,
  name: 'FilterReset',

  inject: ['filterState', 'filterResetId'],

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
    /**
     * The `id` to use for the `filter-reset`
     */
    filterId() {
      return this.filterResetId
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
     * Remove all filters for a `filter-list`
     * 
     * @public
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
