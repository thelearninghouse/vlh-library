<template>
  <div v-on="$listeners" class="filter-list-heading" @click="$emit('toggle-filter-visibility')">
    <slot name="header"></slot>
    <icon v-if="mobile" icon="arrow-down" :color="iconDropdownColor"></icon>
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
  name: 'FilterHeading',

  props: {
    selectedFilter: {
      type: [Object, String]
      // required: true
    },
    iconDropdownColor: String,
    iconResetColor: String,
  }
}
</script>

<style lang="css">
</style>
