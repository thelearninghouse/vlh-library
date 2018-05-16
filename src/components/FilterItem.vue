<template>
  <component :is="elementType" class="filter-item" :class="{ 'selected': hasSelectedClass, 'parent': hasSubItems}">
    <div class="filter-item-label label" @click="updateSelected">
      <icon class="selected-icon" v-if="isSelected" icon="Check"></icon>
      <span v-html="item.name"></span>
      <icon class="toggle-subitems" v-if="hasSubItems" @click.native.stop="showSubItems = !showSubItems" :icon="dropdownIcon"></icon>
    </div>

    <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave" appear>
      <ul class="subfilter-list" v-if="hasSubItems && showSubItems">
        <FilterItem
          v-for="subItem in item.sub_areas"
          :selectedFilter="selectedFilter"
          :item="subItem"
          :class="{'selected': subitemIsSelected(subItem) }"
          :handle-selected="handleSelected"
          :key="subItem.term_id">
        </FilterItem>
      </ul>
    </transition>
  </component>
</template>

<script>
export default {
  name: 'FilterItem',
  inject: ['filterState'],
  props: {

    item: {
      type: [Array, Object],
    },

    elementType: {
      type: String,
      default: "li",
    },

    // selectedFilter: {
    //   type: [Object, String, Number]
    // },

    handleSelected: Function
  },

  data: () => ({
    showSubItems: false
  }),

  computed: {
    filterListState() {
      return this.filterState
    },

    selectedFilter() {
      return this.filterState.active
    },

    isSelected() {
      if ( !this.selectedFilter ) return false
      return this.selectedFilter.term_id === this.item.term_id
    },

    hasSubItems() {
      return this.item.sub_areas && this.item.sub_areas.length ? true : false
    },

    childIsSelected() {
      if ( !this.selectedFilter ) return false
      return this.item.term_id === this.selectedFilter.parent
    },

    hasSelectedClass() {
      return this.isSelected || this.childIsSelected
    },

    dropdownIcon() {
      if (this.showSubItems === true) {
        return 'HideSubfilters'
      } else {
        return 'ShowSubfilters'
      }
    }
  },

  methods: {
    updateSelected() {
      this.filterState.active = this.item
    },

    subitemIsSelected(subitem) {
      if ( !this.selectedFilter ) return false
      return subitem.term_id === this.selectedFilter.term_id
    },

    beforeEnter: function(el) {
      el.style.height = "0";
    },

    enter: function(el) {
      el.style.height = el.scrollHeight + 20 + "px";
    },

    beforeLeave: function(el) {
      el.style.height = el.scrollHeight + 20 + "px";
    },

    leave: function(el) {
      el.style.height = "0";
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

  .filter-item {
    width: 100%;
    position: relative;

    &.selected {

      & > .label {
      }
    }

    .label {
      padding: .5em .75em .5em .5em;
      cursor: pointer;
      position: relative;
      font-size: .9em;
      margin-top: .25em;
      border-bottom: 2px solid #cecece;
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

.toggle-subitems {
  overflow: hidden;
  position: absolute;
  right: 10px;
  top: 50%;
  z-index: 999;
  transform: translateY(-50%);
}
</style>




<docs>
  ```vue { "className": "checks" }
const filters = require('../../mockData/filter.js').default;

<div>
    <FilterItem
      v-for="(option, index) in filters"
      :key="option.term_id"
      :option="option">
    </FilterItem>
</div>
  ```

</docs>
