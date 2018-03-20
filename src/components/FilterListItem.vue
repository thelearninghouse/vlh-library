<template>
  <div class="filter-option">
    <button class="filter-button" :id="option.term_id" @click.prevent="updateValue(option.term_id)">
      <span class="filter-option__title" v-html="option.name"></span>
    </button>
  </div>
</template>
<script>
export default {
  name: 'FilterListItem',
  props: {
    option: {
      type: Object,
      // required: true
    },
    selectedFilter: {
      type: [String, Number]
    },
    /*
    * The v-model attribute
     */
    value: {
      type: Number
    }
  },
  methods: {
    updateValue(value) {
      console.log('RANN', value);
      this.$emit('selected', value)
      // this.$emit('input', Number(value))
    }
  }
}
</script>
<style>
  p {
    font-size: 18px;
  }
  .filter-button {
    text-align: left;
  }
</style>
