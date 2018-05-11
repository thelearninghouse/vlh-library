<template>
  <li class="filter-list-item" :class="{'parent': hasSubItems}">

    <div class="label" @click="handleSelected(item)">
      <span v-html="item.name"></span>
      <icon v-if="hasSubItems" @click.native.stop="showSubItems = !showSubItems" :icon="dropdownIcon"></icon>
    </div>

    <ul v-if="hasSubItems && showSubItems">
      <filter-list-item
        v-for="subItem in item.sub_areas"
        :selectedItem="selectedItem"
        :item="subItem"
        :class="{selected: selectedItem === subItem.term_id}"
        :handle-selected="handleSelected"
        :key="subItem.term_id">
      </filter-list-item>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'FilterListItem',

  props: {

    item: {
      type: [Array, Object],
    },

    selectedItem: {
      type: [String, Number]
    },

    handleSelected: Function
  },

  data: () => ({
    showSubItems: false
  }),

  computed: {
    hasSubItems() {
      return this.item.sub_areas && this.item.sub_areas.length ? true : false
    },

    dropdownIcon() {
      if (this.showSubItems === true) {
        return 'IconHide'
      } else {
        return 'IconShow'
      }
    }
  }
}
</script>
<style lang="scss">
p {
  font-size: 18px;
}
.filter-list {
  flex-direction: column;

  &-item {
    width: 100%;
    margin-top: .25em;
    margin-bottom: .25em;
    position: relative;

    &.selected {

      & > .label {
        background: lightgray !important;
      }
    }

    .label {
      display: block;
      padding: .5em .25em;
      cursor: pointer;
      position: relative;
    }
  }
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
