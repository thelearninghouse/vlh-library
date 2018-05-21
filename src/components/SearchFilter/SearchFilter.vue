<template lang="html">
  <div class="search-filter">
    <label for="searchFilter" class="sr-only">Search For a Degree</label>
    <input v-bind="$attrs" name="searchFilter" :value="value" type="text" class="search-filter-input"  @input="debouncedSearch($event.target.value)">
    <div role="button" aria-label="Clear Search" tabindex="0" @click="clearSearch" @keypress.enter="clearSearch" class="search-icon-wrapper" :class="{clickable: searchQueryExists}">
      <icon size="24px" class="search-icon" :key="searchFilterIcon" :icon="searchFilterIcon" alt="Search Box"></icon>
    </div>
  </div>
</template>

<script>
import debounce from '@/helpers/debounce.js'

export default {
  inheritAttrs: false,
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

    searchFilterIcon() {
      if (this.searchQueryExists) {
        return 'clear-search'
      } else {
        return 'search'
      }
    }
  },

  created() {
    this.debouncedSearch = debounce(this.updateSearch, 500)
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

<style lang="scss" scoped>
.search-filter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row;
  align-content: start;

  &-input {
    height: 45px;
    width: calc(100% - 45px);
    background: #eee;
    padding: .25em .5em;
    box-sizing: border-box;
  }

  .search {
    &-icon-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #cc1f1b;
      width: 45px;
      height: 45px;
    }
  }
}
</style>
