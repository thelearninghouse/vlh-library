<template>
    <component :id="id" class="icon" :is="icon"></component>
</template>

<script>
import IconHide from '../assets/images/icon-hide.svg';
import IconShow from '../assets/images/icon-show.svg';

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
  components: { IconShow, IconHide },
}
</script>

<style lang="scss">

.icon {
  overflow: hidden;
  position: absolute;
  right: 10px;
  top: 50%;
  z-index: 999;
  transform: translateY(-50%);
}

</style>
