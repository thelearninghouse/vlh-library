<template lang="html">
  <div class="search-filter">
    <label for="degreeGridSearch" class="sr-only">Search For a Degree</label>
    <input name="degreeGridSearch" :value="value" type="text" class="search-filter-input" placeholder="Click here to search" @input="updateSearch($event.target.value)">
    <div role="button" aria-label="Clear Search" tabindex="0" @click="clearSearch" @keypress.enter="clearSearch" class="search-filter-icon" :class="{clickable: searchQueryExists}">
      <icon class="search-icon" :key="searchIcon" :icon="searchIcon" alt="Search Box"></icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchFilter',

  props: {
    value: {
      type: String
    }
  },

  computed: {
    searchQueryExists() {
			return this.value !== ''
		},

    searchIcon() {
      if (this.searchQueryExists) {
        return 'HideSubfilters'
      } else {
        return 'ShowSubfilters'
      }
    }
  },
  methods: {
    clearSearch() {
      this.$emit('input', '')
		},

    updateSearch(value) {
      this.$emit('input', value)
    }
  },

}
</script>

<style lang="scss">
.search-filter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row;
  align-content: start;

  &-input {
    height: 40px;
    width: 100%;
    background: #eee;
    padding: .25em .5em;
  }

  &-icon {
    height: 40px;
    display: flex;
    align-items: center;
    width: 40px;
    justify-content: center;
    background: #cc1f1b;
  }
}
</style>
