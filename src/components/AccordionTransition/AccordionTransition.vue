<template>
  <transition
    name="accordion"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave">
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
      el.style.height = el.scrollHeight + "px";
    },

    afterEnter: function(el) {
      el.classList.add('transition-complete')
    },

    beforeLeave: function(el) {
      el.style.height = el.scrollHeight + "px";
    },

    leave: function(el) {
      el.style.height = "0";
    },

    afterLeave: function(el) {}
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

<docs>
  ```vue
<accordion-transtion>
  <!-- Put something here -->
</accordion-transtion>
  ```
</docs>
