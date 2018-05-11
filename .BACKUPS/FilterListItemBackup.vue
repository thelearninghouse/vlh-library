<template>
  <div class="filter-option">
    <div
      key="parentFilter"
      v-if="option.sub_areas && option.sub_areas.length"
      class="filter-button filter-parent"
      @click.prevent.self="updateFilter(option.term_id)">
      <div class="filter-option__title">
        <span>{{option.name}}</span>
        <icon @click.native.stop="showSubOptions = !showSubOptions" :icon="dropdownIcon"></icon>
      </div>
      <template v-if="showSubOptions">
        <FilterButton
          v-for="(subOption, index) in option.sub_areas"
          :key="subOption.term_id"
          class="filter-option"
          :class="{selected: selectedFilterOption === subOption.term_id}"
          @click.native="updateFilter(subOption.term_id)"
          :option="subOption">
        </FilterButton>
      </template>
    </div>

    <FilterButton v-else key="filter" @click.native="updateFilter(option.term_id)" :option="option"></FilterButton>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'FilterListItemBackup',
  props: {
    option: {
      type: [Object, Array],
      // required: true
    },
    selectedFilter: {
      type: [String, Number]
    },
    /*
     * The v-model attribute
     */
    value: {
      type: Number
    }
  },

  data: () => ({
    showSubOptions: false
  }),

  computed: {
    selectedFilterOption() {
      return this.selectedFilter
    },
    dropdownIcon() {
      if (this.showSubOptions === true) {
        return 'IconHide'
      } else {
        return 'IconShow'
      }
    }
  },

  methods: {
    updateFilter(selectedOption) {
      if (true) {

      }
      console.log(selectedOption);
      this.$emit('update:selectedFilter', selectedOption)
    },
    updateFilterFromSub(selectedOption) {
      this.dropdownIcon = !this.dropdownIcon
      this.updateFilter(selectedOption)
    }
  }
}
</script>
<style lang="scss">
p {
  font-size: 18px;
}

.filter-button {
  text-align: left;
}
.filter-option {
  &__title {
    position: relative;
  }
}
</style>




<docs>
  ```vue { "className": "checks" }
const filters = require('../../mockData/filter.js').default;

<div>
    <filter-list-item
      v-for="(option, index) in filters"
      :key="option.term_id"
      :option="option">
    </filter-list-item>
</div>
  ```

</docs>
