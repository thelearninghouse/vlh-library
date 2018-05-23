Basic Filter Item
```
<filter-list
  :visible.sync="showDegreeLevelFilter"
  :selected-filter.sync="currentDegreeLevelFilter">
  <filter-item :item="degreeLevels[0]" :key="degreeLevels[0].term_id">
  <filter-item :item="degreeLevels[1]" :key="degreeLevels[1].term_id">
  </filter-item>
</filter-list>
```
