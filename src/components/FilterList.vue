<template>
  <component v-show="visible" :is="elementType" class="filter-list">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'FilterList',

  provide() {
    return {
      filterState: this.filterState
    }
  },

  props: {
    /*
    * HTML Element to use for this compontent
     */
    elementType: {
      type: String,
      default: 'ul'
    },
    /*
    * HTML Array of filters for this filter group
     */
    visible: {
      type: Boolean,
      // required: true
    },

    selectedFilter: {
      type: [Object, String, Number]
      // required: true
    }
  },

  data: () => ({
    filterState: {
      active: null,
      test: 1
    },
    // visible: true
  }),

  watch: {
    'filterState.active': function (newFilter, oldFilter) {
      this.$emit('update:selectedFilter', newFilter)
      if (this.mobile) {
        this.$emit('update:visible', false)
      }
    },

    mobile: function (newValue, oldValue) {
      if (this.mobile) {
        this.$emit('update:visible', false)
      } else {
        this.$emit('update:visible', true)
      }
    }
  },

  methods: {
    handleSelected (item) {
      this.$emit('filter-selected', item)
    },

    handleReset () {
      this.$emit('filter-reset')
    }
  }
}
</script>
<style>
  p {
    font-size: 18px;
  }
</style>
