<template>
  <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
    <slot></slot>
  </transition>
</template>
<script>
export default {
  name: 'AccordionTransition',
  
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
};
</script>
<style>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fadeIn {
  animation-name: fadeIn;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.fadeOut {
  animation-name: fadeOut;
}
</style>
