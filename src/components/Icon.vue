<template>
    <component :id="id" class="icon" :is="icon"></component>
</template>

<script>
import Check from '../assets/images/check.svg';
import IconHide from '../assets/images/icon-hide.svg';
import IconShow from '../assets/images/icon-show.svg';
import ShowSubfilters from '../assets/images/show-subfilters.svg';
import HideSubfilters from '../assets/images/hide-subfilters.svg';
import Search from '../assets/images/search.svg';
import ClearSearch from '../assets/images/clear-search.svg';

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
    }
  },
  components: { Check, IconShow, IconHide, ShowSubfilters, HideSubfilters },
}
</script>

<style lang="scss">

</style>
