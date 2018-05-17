<template>
<component :id="id" class="icon" :is="icon" :style="{fill: color}"></component>
</template>

<script>
import Check from '../assets/images/check.svg';
import IconHide from '../assets/images/icon-hide.svg';
import IconShow from '../assets/images/icon-show.svg';
import ShowSubfilters from '../assets/images/show-subfilters.svg';
import HideSubfilters from '../assets/images/hide-subfilters.svg';
import Search from '../assets/images/search.svg';
import ClearSearch from '../assets/images/clear-search.svg';
import ArrowUp from '../assets/images/arrow-up.svg';
import ArrowDown from '../assets/images/arrow-down.svg';

/**
 * Icon
 *
 */
export default {
  name: 'Icon',
  props: {
    id: {
      type: String
    },
    icon: {
      type: [String, Object, Function, Array]
    },
    color: {
      type: String,
      default: '#fff'
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
    ShowSubfilters
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
