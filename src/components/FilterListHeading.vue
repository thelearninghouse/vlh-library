<template>
  <div v-on="$listeners" class="filter-list-heading" @click="$emit('toggle-filter-visibility')">
    <h2 class="heading" v-html="heading"></h2>
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
  name: 'FilterListHeading',

  props: {
    selectedFilter: {
      type: [Object, String]
      // required: true
    },

    heading: String,

    iconDropdownColor: String,

    iconResetColor: String,
  }
}
</script>

<style lang="css">
</style>
