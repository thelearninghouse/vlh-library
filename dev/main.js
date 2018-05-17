import Vue from 'vue'
import App from './App.vue'
import VlhLibrary from '../src/index.js'
import './styles/demo.scss'

Vue.use(VlhLibrary)

new Vue({
    el: '#app',
    render: h => h(App)
})
