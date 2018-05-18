<template>
  <div id="vlh-filtering">
    <div class="degree-filters">

      <search-filter placeholder="Click here to search" v-model="currentDegreeSearchFilter"></search-filter>

      <div class="filter-list-wrapper">
        <filter-list-heading
          :list-visibility="showDegreeLevelFilter"
          @toggle-filter-visibility="handleFilterHeadingClick('showDegreeLevelFilter', 'showDegreeAreaFilter')"
          :selectedFilter.sync="currentDegreeLevelFilter"
          icon-dropdown-color="#cc1f1b"
          icon-reset-color="gray"
          heading="Degree Levels">
        </filter-list-heading>

        <div class="filter-list-status" v-if="currentDegreeLevelFilter && mobile">
          <span class="text" v-html="currentDegreeLevelFilter.name"></span>
          <icon class="icon-button" @click.native="currentDegreeLevelFilter = null" icon="clear-search" color="black" size="22px"></icon>
        </div>

          <filter-list
            :visible.sync="showDegreeLevelFilter"
            :selected-filter.sync="currentDegreeLevelFilter">
            <filter-reset title="All Levels"></filter-reset>
            <filter-item
              v-for="item in degreeLevels"
              :item="item"
              :key="item.term_id">
            </filter-item>
          </filter-list>
      </div>

      <div class="filter-list-wrapper">
        <filter-list-heading
          :list-visibility="showDegreeAreaFilter"
          @toggle-filter-visibility="handleFilterHeadingClick('showDegreeAreaFilter', 'showDegreeLevelFilter')"
          :selectedFilter.sync="currentDegreeAreaFilter"
          icon-dropdown-color="#cc1f1b"
          icon-reset-color="gray"
          heading="Degree Areas">
        </filter-list-heading>

        <div class="filter-list-status" v-if="currentDegreeAreaFilter && mobile">
          <span class="text" v-html="currentDegreeAreaFilter.name"></span>
          <icon class="icon-button" @click.native="currentDegreeAreaFilter = null" icon="clear-search" color="black" size="22px"></icon>
        </div>

        <filter-list
          :visible.sync="showDegreeAreaFilter"
          :selected-filter.sync="currentDegreeAreaFilter">
          <filter-reset title="All Levels"></filter-reset>
          <FilterItem
            v-for="item in degreeAreas"
            :item="item"
            :key="item.term_id">
          </FilterItem>
        </filter-list>
      </div>
    </div>

    <degree-list>
      <degree-item v-for="degree in degreeList" :item="degree" :key="degree.ID" />
    </degree-list>

    <h1 class="no-results" v-if="!degreeList.length">No Matches</h1>
  </div>
</template>

<script>
import wpData from '../wpDataMock.js'
import {buildDegreeList} from './helpers.js'
import {degreeMixin} from '../src/index.js'

export default {
  mixins: [degreeMixin],
  mounted() {
    this.degrees = buildDegreeList(wpData.degrees);
    this.degreeLevels = wpData.degreeLevels
    this.degreeAreas = wpData.degreeAreas
  }
}
</script>


<style lang="scss">
  /* Temporary */

</style>
