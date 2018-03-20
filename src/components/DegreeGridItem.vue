<template>
  <component :is="type" class="degree filter-grid-item">
    <div class="degree__info">
      <h2 class="degree__name" v-html="item.title.rendered"></h2>
      <blockquote class="degree__slogan" v-html="item.slug"></blockquote>
      <ul class="degree__details">
        <li class="degree__data">
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
}
</script>

<docs>
  ```jsx
<degree-grid-item v-for="item in items" :key="item.id" :item="item"></degree-grid-item>
  ```
</docs>
