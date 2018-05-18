<template>
  <transition name="slide-fade">
    <component v-show="visible" :is="elementType" class="filter-list">
      <slot></slot>
    </component>
  </transition>
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

  created() {
    this.handleMobile();
  },

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
      this.handleMobile();
    }
  },

  methods: {
    handleMobile() {
      if (this.mobile) {
        this.$emit('update:visible', false)
      } else {
        this.$emit('update:visible', true)
      }
    }
  }
}
</script>
<style lang="scss">
  ul {
    padding-left: 0;
    background: white;
  }
  .filter-list {
    overflow: hidden;
    list-style-type: none;
    /* transition: .3s ease; */
  }
  p {
    font-size: 18px;
  }
</style>
