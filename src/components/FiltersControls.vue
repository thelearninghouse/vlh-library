<template lang="html">
  <div class="filters-toolbar">
    <div class="degreeFilters levels">
      <h2>Degree Levels</h2>
      <ul class="filter-list">
        <li class="filter-option filter-button">
          <label class="filter-option__title" for="all-levels-filter">All</label>
          <input id="all-levels-filter" type="radio" value="" v-model.lazy.number="currentDegreeLevelFilter">
        </li>
        <li class="filter-option filter-button" v-for="(option, key) in degreeFilters.degree_levels">
          <label class="filter-option__title" :for="key" v-text="option.name"></label>
          <input :id="key" :key="key" type="radio" :value="key" v-model.lazy.number="currentDegreeLevelFilter">
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  /*
    * This is the toolbar but for the filter lists
   */
  name: 'FilterControls',
}
</script>

<style lang="css">
</style>
