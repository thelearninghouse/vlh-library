<template>
  <accordion-transition>
    <component v-show="visible" :is="elementType" class="filter-list">
      <slot></slot>
    </component>
  </accordion-transition>
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
      type: [Object, String]
      // required: true
    }
  },

  data: () => ({
    filterState: {
      active: null
    }
  }),

  watch: {
    'filterState.active': function (newFilter, oldFilter) {
      this.$emit('update:selectedFilter', newFilter)
      if (this.mobile) {
        this.$emit('update:visible', false)
      }
    },

    selectedFilter: function (newFilter, oldFilter) {
      this.filterState.active = newFilter
    },

    mobile: function (newValue, oldValue) {
      if (this.mobile) {
        this.$emit('update:visible', false)
      } else {
        this.$emit('update:visible', true)
      }
    }
  }
}
</script>
<style>
  .filter-list {
    overflow: hidden;
    transition: .3s ease;
  }
  p {
    font-size: 18px;
  }
</style>
