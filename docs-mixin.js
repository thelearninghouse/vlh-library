import wpData from './wpDataMock.js'
import {buildDegreeList} from './dev/helpers.js'
// import {degreeMixin} from '@/index.js'

export default {
  mounted() {
    this.degrees = buildDegreeList(wpData.degrees);
    this.degreeLevels = wpData.degreeLevels
    this.degreeAreas = wpData.degreeAreas
  }
  /* ... */
}
