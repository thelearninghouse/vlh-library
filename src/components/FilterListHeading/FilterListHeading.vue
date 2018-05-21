<template>
  <div v-on="$listeners" class="filter-list-heading" @click="handleToggle">
    <h2 class="heading" v-html="heading"></h2>
    <icon v-if="mobile" :icon="currentIcon" :color="iconDropdownColor" size="30px"></icon>
    <div v-if="!mobile && selectedFilter" @click="$emit('update:selectedFilter', null)" class="filter-clear">
      <slot name="filter-clear">
        Clear
        <icon icon="clear-search" class="icon-button" :color="iconResetColor"></icon>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterListHeading',

  data: () => ({
    currentIcon: 'arrow-down'
  }),

  props: {
    selectedFilter: {
      type: [Object, String]
      // required: true
    },

    heading: String,
    listVisibility: Boolean,
    iconDropdownColor: String,

    iconResetColor: String,
  },

  computed: {
    listToggleIcon() {
      // this.
    }
  },

  methods: {
    handleToggle() {
      this.$emit('toggle-filter-visibility')
    }
  },

  watch: {
    listVisibility: function(newValue, oldValue) {
      if (newValue === true) {
        this.currentIcon = 'arrow-up'
      } else {
        this.currentIcon = 'arrow-down'
      }
    }
  }
}
</script>

<style lang="scss">
  .filter-clear {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
</style>

<docs>

```vue
<filter-list-heading heading="Degree Levels 2"></filter-list-heading>
```

</docs>
