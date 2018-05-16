import Vue from 'vue'

Vue.mixin({
  data: () => ({
    mobile: false,
  }),

  mounted() {
    const mq = window.matchMedia("(min-width: 800px)");
    mq.addListener(this.widthHandler);
    this.widthHandler(mq);
  },

  methods: {
    widthHandler(mq) {
      if (mq.matches) {
        this.mobile = false
      } else {
        this.mobile = true
      }
    }
  }
})
