<template>
  <component
    role="presentation"
    :is="elementType"
    class="filter-item"
    :class="{ 'selected': hasSelectedClass, 'parent': hasSubItems}"
  >
    <div
      :id="`button-${item.slug}`"
      tabindex="0"
      role="button"
      class="filter-item-content"
      @keyup.enter="updateSelected"
      @click="updateSelected"
      :aria-pressed="isSelected ? 'true' : 'false'"
    >
      <icon class="selected-indicator" v-if="isSelected" icon="check"></icon>
      <span class="title" v-html="item.name"></span>
      <button aria-label="Toggle Subfilters" class="toggle-subitems" @click.stop="showSubItems = !showSubItems"  v-if="hasSubItems">
        <icon :icon="dropdownIcon" size="32" color="#222"></icon>
      </button>
    </div>

    <accordion-transition>
      <ul class="subfilter-list" v-if="hasSubItems && showSubItems">
        <FilterItem
          v-for="subItem in item.sub_areas"
          :item="subItem"
          :key="subItem.term_id">
        </FilterItem>
                  <!-- :class="{'subfilter-selected': subitemIsSelected(subItem) }" -->
      </ul>
    </accordion-transition>

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

    &-content {
      display: flex;
      align-items: center;
      height: 45px;
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

<filter-item
  v-for="filter in degreeLevels"
  :key="filter.term_id"
  :item="filter">
</filter-item>
```

</docs>
