<template>
  <component :is="type" class="degree-grid-item">
    <div class="degree__info">
      <h2 class="degree__name" v-html="item.post_title"></h2>
      <blockquote class="degree__slogan" v-html="item.name"></blockquote>
      <ul class="degree__details">
        <li class="degree__data">
       
          <label class="degree__label"><strong>Areas: </strong></label>
          <div class="degree__country">
            <span v-for="area in item.degree_areas" class="">
              {{area.name}}
            </span>
          </div>
        </li>
        <br>
        <li class="degree__data">
          <label class="degree__label"><strong>Levels: </strong></label>
          <span v-for="level in item.degree_levels" class="">
            {{level.name}}
          </span>
        </li>
      </ul>
    </div>
  </component>
</template>

<script>
/**
 * Filtering for an array of items
 */
export default {
  name: "DegreeGridItem",
  version: "ready",
  props: {
    /**
     * The object of data for an individual within the degrees array list
     */
    item: {
      required: true,
      type: Object
    },
    /**
     * The html element name used for the item
     */
    type: {
      type: String,
      default: "li",
    },
  },
  computed: {
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
  }
}
</script>

<style lang="scss" scoped>

.degree-grid-item {
  display: inline-flex;
  vertical-align: top;
  background: #f5f5f5;
  border: 1px solid #eee;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 165px;
  margin: 10px;
  border: 1px solid gray;
  padding: 1em;
}
.degree__info {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  align-content: stretch;
}
</style>
<docs>
  ```jsx
<degree-grid-item v-for="item in items" :key="item.id" :item="item"></degree-grid-item>
  ```
</docs>
