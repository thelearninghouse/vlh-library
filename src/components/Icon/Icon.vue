<template>
  <component :id="id" class="icon" :is="icon" :style="{fill: color, width: size, height: size}"></component>
</template>

<script>
import Check from '@/assets/images/check.svg';
import IconHide from '@/assets/images/icon-hide.svg';
import IconShow from '@/assets/images/icon-show.svg';
import ShowSubfilters from '@/assets/images/show-subfilters.svg';
import HideSubfilters from '@/assets/images/hide-subfilters.svg';
import Search from '@/assets/images/search.svg';
import ClearSearch from '@/assets/images/clear-search.svg';
import ArrowUp from '@/assets/images/arrow-up.svg';
import ArrowDown from '@/assets/images/arrow-down.svg';
import AddCircleOutline from '@/assets/images/add-circle-outline.svg';
import RemoveCircleOutline from '@/assets/images/remove-circle-outline.svg';

/**
 * Icon
 * These are SVG icons
 */
export default {
  name: 'Icon',
  props: {
    id: {
      type: String
    },
    /**
    * The icon to use.
    *
    */
    icon: {
      type: String,
      required: true
    },
    /**
     * The color to use for the icon
    */
    color: {
      type: String,
      default: '#fff'
    },
    /**
    * The size of the icon.
    */
    size: {
      type: String,
      default: '24px'
    }
  },
  components: {
    ArrowDown,
    ArrowUp,
    Check,
    ClearSearch,
    HideSubfilters,
    IconShow,
    IconHide,
    Search,
    ShowSubfilters,
    AddCircleOutline,
    RemoveCircleOutline
  },
}
</script>

<style lang="scss">
.icon {
    &-button {
        cursor: pointer;
    }
}
</style>
