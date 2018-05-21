```
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
```
