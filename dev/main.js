import Vue from 'vue'
import App from './App.vue'
import VlhLibrary from '../src/index.js'

Vue.use(VlhLibrary)

new Vue({
    el: '#app',
    render: h => h(App)
})

// inject svg spritesheet
fetch("https://s3-us-west-2.amazonaws.com/s.cdpn.io/450744/mock-logos.svg")
.then(response => response.text())
.then(sprite => {
let figure = document.createElement("figure");
figure.style.display = "none";
figure.innerHTML = sprite;
document.body.insertBefore(figure, document.body.children[0]);
});
