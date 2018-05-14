<template>
  <li class="filter-list-item" :class="{'parent': hasSubItems}">
    <div class="label" @click="handleSelected(item)">
      <icon class="selected-icon" v-if="selectedItem === item.term_id"  icon="Check"></icon>
      <span v-html="item.name"></span>
      <icon class="toggle-subitems" v-if="hasSubItems" @click.native.stop="showSubItems = !showSubItems" :icon="dropdownIcon"></icon>
    </div>

    <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave" appear>
      <ul class="subfilter-list" v-if="hasSubItems && showSubItems">
        <filter-list-item
          v-for="subItem in item.sub_areas"
          :selectedItem="selectedItem"
          :item="subItem"
          :class="{selected: selectedItem === subItem.term_id}"
          :handle-selected="handleSelected"
          :key="subItem.term_id">
        </filter-list-item>
      </ul>
    </transition>
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
        return 'HideSubfilters'
      } else {
        return 'ShowSubfilters'
      }
    }
  },

  methods: {
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

  &-item {
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
    <filter-list-item
      v-for="(option, index) in filters"
      :key="option.term_id"
      :option="option">
    </filter-list-item>
</div>
  ```

</docs>
