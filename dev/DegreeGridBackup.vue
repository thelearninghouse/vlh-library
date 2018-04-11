<template>
  <component :is="type" class="degree-grid">
    <!-- <transition-group name="demo" tag="ul" class="list" appear
        @before-enter="beforeEnter"
        @after-enter="afterEnter"
        @enter-cancelled="afterEnter">
      <li class="item" v-for="(item,idx) in items" :key="item.id" :data-index="idx">
        <div>
          <h2 v-html="item.title.rendered"></h2>
          <blockquote v-html="item.slug"></blockquote>
          <ul>
            <li>
              <label class="degree__label">Verticals</label>
              <div class="degree__country">
                <span v-for="vertical in item.verticals" class="">
                    {{vertical}}
                  </span>
              </div>
            </li>

            <li class="degree__data">
              <label class="degree__label">Levels</label>
            </li>
          </ul>
        </div>
      </li>
    </transition-group> -->

    <transition-group name="demo" tag="ul" class="list" appear
      @before-enter="beforeEnter"
      @after-enter="afterEnter"
      @enter-cancelled="afterEnter"
      >
      <degree-grid-item v-for="item in items" :key="item.id" :item="item"></degree-grid-item>
      <!-- <slot name="filter-grid-items">

      </slot> -->
    </transition-group>
  </component>
</template>

<script>
/**
 * Filtering for an array of items
 */
export default {
  name: "DegreeGrid",
  version: "ready",
  props: {
    /**
     * The array of items to be used for the filtering.
     */
    items: {
      type: Array,
      required: true
    },
    width: {
      type: String
    },
    /**
     * The html element name used for the icon
     */
    type: {
      type: String,
      default: "div",
    },
  },
  methods: {
    beforeEnter(el) {
      // el.style.transitionDelay = 100 * el.dataset.index + 'ms'
    },
    afterEnter(el) {
      // el.style.transitionDelay = ''
    },
    beforeLeave(el) {
      var { marginLeft, marginTop, width, height } = window.getComputedStyle(el)
      el.style.left = el.offsetLeft - parseFloat(marginLeft, 10) + 'px'
      el.style.top = el.offsetTop - parseFloat(marginTop, 10) + 'px'
      el.style.width = width
      el.style.height = height
    }
  },
  computed: {
    listStyle() {
      return {width: this.width}
    }

  },
}
</script>

<style lang="scss" scoped>
.list {
  perspective: 3000px;
  perspective-origin: 50% 50%;
}
.item {
  display: inline-flex;
  vertical-align: top;
  background: #f5f5f5;
  border: 1px solid #eee;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 140px;
  margin: 10px;
  border: 1px solid gray;
}
</style>

<docs>
  ```vue
<DegreeGrid :items="degrees"/>
  ```
</docs>
