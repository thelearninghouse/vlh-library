<template>
<div id="vlh-filtering">
  <div class="animations" :class="{expanded: showbox}">
    <button @click="showbox = !showbox">Toggle Box</button>
    <transition name="slide-in-left">
      <div v-show="showbox" id="box1">
        Box 1
      </div>
    </transition>
  </div>
  <div class="degree-filters">

    <search-filter placeholder="Click here to search" v-model="currentDegreeSearchFilter"></search-filter>

    <div class="filter-list-wrapper">
      <filter-list-heading
        :list-visibility="showDegreeLevelFilter" @toggle-filter-visibility="handleFilterHeadingClick('showDegreeLevelFilter', 'showDegreeAreaFilter')" :selectedFilter.sync="currentDegreeLevelFilter"
        icon-dropdown-color="#cc1f1b"
        icon-reset-color="gray"
        heading="Degree Levels">
      </filter-list-heading>

      <div class="filter-list-status" v-if="currentDegreeLevelFilter && mobile">
        <span class="text" v-html="currentDegreeLevelFilter.name"></span>
        <icon class="icon-button" @click.native="currentDegreeLevelFilter = null" icon="clear-search" color="black" size="22px"></icon>
      </div>

      <filter-list aria-label="Degree Levels Filter" filter-reset-id="all-levels" :visible.sync="showDegreeLevelFilter" :selected-filter.sync="currentDegreeLevelFilter">
        <filter-reset title="All Levels"></filter-reset>
        <filter-item v-for="item in degreeLevels" :item="item" :key="item.term_id">
        </filter-item>
      </filter-list>
    </div>

    <div id="filter-areas" class="filter-list-wrapper">
      <filter-list-heading :list-visibility="showDegreeAreaFilter" @toggle-filter-visibility="handleFilterHeadingClick('showDegreeAreaFilter', 'showDegreeLevelFilter')" :selectedFilter.sync="currentDegreeAreaFilter" icon-dropdown-color="#cc1f1b" icon-reset-color="gray"
        heading="Degree Areas">
      </filter-list-heading>

      <div class="filter-list-status" v-if="currentDegreeAreaFilter && mobile">
        <span class="text" v-html="currentDegreeAreaFilter.name"></span>
        <icon class="icon-button" @click.native="currentDegreeAreaFilter = null" icon="clear-search" color="black" size="22px"></icon>
      </div>

      <filter-list filter-reset-id="all-degrees" :visible.sync="showDegreeAreaFilter" :selected-filter.sync="currentDegreeAreaFilter">
        <filter-reset title="All Areas"></filter-reset>
        <filter-item v-for="item in degreeAreas" :item="item" :key="item.term_id">
        </filter-item>
      </filter-list>
    </div>
  </div>

  <degree-list :ready="ready">
    <degree-item v-for="degree in degreeList" :item="degree" :key="degree.ID" />
  </degree-list>

  <transition name="vertical-fade">
    <h1 class="no-results" v-if="ready && !degreeList.length">No Matches</h1>
  </transition>
</div>
</template>

<script>
import wpData from '../wpDataMock.js'

import {
  degreeMixin
} from '../src/index.js'

export default {
  mixins: [degreeMixin],
  data: () => ({
    showbox: false
  }),
  mounted() {
    this.degrees = this.createDegreeList(wpData.degrees);
    this.degreeLevels = wpData.degreeLevels
    this.degreeAreas = wpData.degreeAreas
    this.checkForUrlParams();
    this.checkForUrlHash();
  },
  methods: {
    testSlotMethod() {
      alert('fired!')
    }
  }
}
</script>


<style lang="scss">
#vlh-filtering {
  flex-flow: row wrap;

  .animations {
    width: 100%;
    padding: 3em 5em;
    height: 145px;
    transition: .5s ease;
    // transition-delay: .15s;
    overflow: hidden;
    &.expanded {
      height: 350px;
    }
    button {
      margin: 1em .2em;
    }
  }

  #box1 {
    background: gray;
    width: 200px;
    height: 200px;
    padding: 1em;
  }
}
/* Temporary */
</style>
