<template>
  <transition name="slide-fade">
    <component
      aria-controls="degree-list-id"
      role="toolbar"
      tabindex="0"
      :aria-activedescendant="activeDecendant"
      v-show="visible"
      :is="elementType"
      class="filter-list">
      <slot></slot>
    </component>
  </transition>
</template>

<script>
export default {
  name: 'FilterList',

  provide() {
    return {
      filterState: this.filterState,
      filterResetId: this.filterResetId
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
    },
    filterResetId: {
      type: String
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

  computed: {
    activeDecendant() {
      return this.selectedFilter ? `button-${this.selectedFilter.slug}` : `button-${this.filterResetId}`
    }
  },

  methods: {
    /**
     * Checks if at mobile size
     * @event visible
     * @type Boolean
     * @return {Boolean} [description]
     */
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
  .filter-list {
    overflow: hidden;
    list-style-type: none;
    padding-left: 0;
    background: white;
    /* transition: .3s ease; */
  }
  p {
    font-size: 18px;
  }
</style>
