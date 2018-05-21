(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VlhLibrary=t():e.VlhLibrary=t()})("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=10)}([function(e,t,r){"use strict";function n(e,t,r,n,i,s,a,o){e=e||{};var c=typeof e.default;"object"!==c&&"function"!==c||(e=e.default);var l="function"==typeof e?e.options:e;t&&(l.render=t,l.staticRenderFns=r,l._compiled=!0),n&&(l.functional=!0),s&&(l._scopeId=s);var u;if(a?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=u):i&&(u=o?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(l.functional){l._injectStyles=u;var f=l.render;l.render=function(e,t){return u.call(t),f(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,u):[u]}return{exports:e,options:l}}t.a=n},function(e,t,r){"use strict";t.a={name:"AccordionTransition",methods:{beforeEnter:function(e){e.style.height="0"},enter:function(e){e.style.height=e.scrollHeight+20+"px"},beforeLeave:function(e){e.style.height=e.scrollHeight+20+"px"},leave:function(e){e.style.height="0"}}}},function(e,t,r){"use strict";t.a={name:"DegreeItem",props:{item:{required:!0,type:Object},elementType:{type:String,default:"li"}},data:function(){return{showContent:!1}},computed:{degreeClasses:function(){return this.getDegreeClasses(this.item)},toggleContentIcon:function(){return this.showContent?"remove-circle-outline":"add-circle-outline"}},methods:{getDegreeClasses:function(e){var t=e.degree_levels,r=e.degree_areas,n=t.map(function(e){return e.slug||""}),i=r.map(function(e){return e.slug?e.slug:""});return n.concat(i)}}}},function(e,t,r){"use strict";t.a={name:"DegreeList",props:{items:{type:Array},elementType:{type:String,default:"div"}}}},function(e,t,r){"use strict";t.a={name:"FilterItem",inject:["filterState"],props:{item:{type:[Array,Object]},elementType:{type:String,default:"li"},handleSelected:Function},data:function(){return{showSubItems:!1}},computed:{filterListState:function(){return this.filterState},selectedFilter:function(){return this.filterState.active},isSelected:function(){return!!this.selectedFilter&&this.selectedFilter.term_id===this.item.term_id},hasSubItems:function(){return!(!this.item.sub_areas||!this.item.sub_areas.length)},childIsSelected:function(){return!!this.selectedFilter&&this.item.term_id===this.selectedFilter.parent},hasSelectedClass:function(){return this.isSelected||this.childIsSelected},dropdownIcon:function(){return!0===this.showSubItems?"HideSubfilters":"ShowSubfilters"}},methods:{updateSelected:function(){this.filterState.active=this.item},subitemIsSelected:function(e){return!!this.selectedFilter&&e.term_id===this.selectedFilter.term_id}}}},function(e,t,r){"use strict";t.a={name:"FilterList",provide:function(){return{filterState:this.filterState}},props:{elementType:{type:String,default:"ul"},visible:{type:Boolean},selectedFilter:{type:[Object,String]}},data:function(){return{filterState:{active:null}}},created:function(){this.handleMobile()},watch:{"filterState.active":function(e,t){this.$emit("update:selectedFilter",e),this.mobile&&this.$emit("update:visible",!1)},selectedFilter:function(e,t){this.filterState.active=e},mobile:function(e,t){this.handleMobile()}},methods:{handleMobile:function(){this.mobile?this.$emit("update:visible",!1):this.$emit("update:visible",!0)}}}},function(e,t,r){"use strict";t.a={name:"FilterListHeading",data:function(){return{currentIcon:"arrow-down"}},props:{selectedFilter:{type:[Object,String]},heading:String,listVisibility:Boolean,iconDropdownColor:String,iconResetColor:String},computed:{listToggleIcon:function(){}},methods:{handleToggle:function(){this.$emit("toggle-filter-visibility")}},watch:{listVisibility:function(e,t){this.currentIcon=!0===e?"arrow-up":"arrow-down"}}}},function(e,t,r){"use strict";t.a={name:"FilterReset",inject:["filterState"],props:{id:{type:String},title:{type:String,default:"All"},elementType:{type:String,default:"li"}},computed:{filterListState:function(){return this.filterState},selectedFilter:function(){return this.filterState.active},isSelected:function(){return null===this.selectedFilter}},methods:{updateSelected:function(){this.filterState.active=null}}}},function(e,t,r){"use strict";var n=r(40),i=r.n(n),s=r(41),a=r.n(s),o=r(42),c=r.n(o),l=r(43),u=r.n(l),f=r(44),d=r.n(f),h=r(45),v=r.n(h),p=r(46),g=r.n(p),m=r(47),_=r.n(m),b=r(48),w=r.n(b),y=r(49),S=r.n(y),C=r(50),x=r.n(C);t.a={name:"Icon",props:{id:{type:String},icon:{type:String,required:!0},color:{type:String,default:"#fff"},size:{type:String,default:"24px"}},components:{ArrowDown:w.a,ArrowUp:_.a,Check:i.a,ClearSearch:g.a,HideSubfilters:d.a,IconShow:c.a,IconHide:a.a,Search:v.a,ShowSubfilters:u.a,AddCircleOutline:S.a,RemoveCircleOutline:x.a}}},function(e,t,r){"use strict";var n=r(54);t.a={inheritAttrs:!1,name:"SearchFilter",props:{value:{type:String}},computed:{searchQueryExists:function(){return""!==this.value},searchFilterIcon:function(){return this.searchQueryExists?"clear-search":"search"}},created:function(){this.debouncedSearch=Object(n.a)(this.updateSearch,500)},methods:{clearSearch:function(){this.$emit("input","")},updateSearch:function(e){this.$emit("input",e)}}}},function(e,t,r){e.exports=r(11)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(12),i=r(13),s=r(15);r.n(s);r.d(t,"degreeMixin",function(){return i.a});var a=r(16),o=[];a.keys().forEach(function(e){return o.push(a(e).default)});var c={install:function(e,t){o.forEach(function(t){return e.component(t.name,t)}),e.mixin(n.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(c),t.default=c},function(e,t,r){"use strict";t.a={data:function(){return{mobile:!1}},mounted:function(){var e=window.matchMedia("(min-width: 800px)");e.addListener(this.widthHandler),this.widthHandler(e)},methods:{widthHandler:function(e){e.matches?this.mobile=!1:this.mobile=!0}}}},function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}r(14);t.a={data:function(){return{degrees:[],degreeLevels:[],degreeAreas:[],currentDegreeLevelFilter:null,currentDegreeAreaFilter:null,currentDegreeSearchFilter:"",showDegreeLevelFilter:!1,showDegreeAreaFilter:!1}},computed:{degreeList:function(){if(!this.degrees)return[];var e=new Set(this.filteredDegreesByArea),t=new Set(this.filteredDegreesByLevel),r=new Set(this.filteredDegreesBySearch);return[].concat(n(new Set([].concat(n(e)).filter(function(e){return t.has(e)&&r.has(e)}))))},filteredDegreesBySearch:function(){var e=this;return this.currentDegreeSearchFilter?this.degrees.filter(function(t){return t.post_title.toLowerCase().includes(e.currentDegreeSearchFilter.toLowerCase())}):this.degrees},filteredDegreesByArea:function(){var e=this;return this.currentDegreeAreaFilter?this.degrees.filter(function(t){return t.areas.includes(e.currentDegreeAreaFilter.term_id)}):this.degrees},filteredDegreesByLevel:function(){var e=this;return this.currentDegreeLevelFilter?this.degrees.filter(function(t){return t.levels.includes(e.currentDegreeLevelFilter.term_id)}):this.degrees}},methods:{handleFilterHeadingClick:function(e,t){this.mobile&&(t&&(this[t]=!1),this[e]=!this[e])},updateFilter:function(e){"degree_vertical"===e.taxonomy?this.currentDegreeAreaFilter=e:this.currentDegreeLevelFilter=e}}}},function(e,t,r){"use strict"},function(e,t){},function(e,t,r){function n(e){return r(i(e))}function i(e){var t=s[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var s={"./AccordionTransition.vue":17,"./DegreeItem.vue":20,"./DegreeList.vue":23,"./FilterItem.vue":26,"./FilterList.vue":29,"./FilterListHeading.vue":32,"./FilterReset/FilterReset.vue":35,"./Icon.vue":38,"./SearchFilter/SearchFilter.vue":52};n.keys=function(){return Object.keys(s)},n.resolve=i,e.exports=n,n.id=16},function(e,t,r){"use strict";function n(e){r(18)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),s=r(19),a=r(0),o=n,c=Object(a.a)(i.a,s.a,s.b,!1,o,null,null);t.default=c.exports},function(e,t){},function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return i});var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("transition",{attrs:{name:"accordion"},on:{"before-enter":e.beforeEnter,enter:e.enter,"before-leave":e.beforeLeave,leave:e.leave}},[e._t("default")],2)},i=[]},function(e,t,r){"use strict";function n(e){r(21)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(2),s=r(22),a=r(0),o=n,c=Object(a.a)(i.a,s.a,s.b,!1,o,"data-v-88a89194",null);t.default=c.exports},function(e,t){},function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return i});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r(e.elementType,{tag:"component",staticClass:"degree-item",class:[e.degreeClasses,{open:e.showContent}]},[e._t("default",[r("div",{staticClass:"degree-item-header"},[r("h2",{staticClass:"title",domProps:{innerHTML:e._s(e.item.post_title)}}),e._v(" "),r("icon",{staticClass:"icon-button",attrs:{icon:e.toggleContentIcon,size:"30px",color:"#222"},nativeOn:{click:function(t){t.stopPropagation(),e.showContent=!e.showContent}}})],1),e._v(" "),r("accordion-transition",[e.showContent?r("div",{staticClass:"degree-item-content"},[r("p",[e._v(e._s(e.item.summary))]),e._v(" "),r("div",{staticClass:"degree-item-cta"},[r("a",{attrs:{href:"/"+e.item.post_name}},[e._v("View Info")])])]):e._e()])],null,e.item)],2)},i=[]},function(e,t,r){"use strict";function n(e){r(24)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(3),s=r(25),a=r(0),o=n,c=Object(a.a)(i.a,s.a,s.b,!1,o,"data-v-1293770a",null);t.default=c.exports},function(e,t){},function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return i});var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("transition-group",{staticClass:"degree-list",attrs:{name:"animated-grid-items",tag:e.elementType,appear:""}},[e._t("default")],2)},i=[]},function(e,t,r){"use strict";function n(e){r(27)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(4),s=r(28),a=r(0),o=n,c=Object(a.a)(i.a,s.a,s.b,!1,o,null,null);t.default=c.exports},function(e,t){},function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return i});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r(e.elementType,{tag:"component",staticClass:"filter-item",class:{selected:e.hasSelectedClass,parent:e.hasSubItems}},[r("div",{staticClass:"filter-item-content",on:{click:e.updateSelected}},[e.isSelected?r("icon",{staticClass:"selected-indicator",attrs:{icon:"check"}}):e._e(),e._v(" "),r("span",{staticClass:"title",domProps:{innerHTML:e._s(e.item.name)}}),e._v(" "),e.hasSubItems?r("icon",{staticClass:"toggle-subitems",attrs:{icon:e.dropdownIcon,size:"32",color:"#222"},nativeOn:{click:function(t){t.stopPropagation(),e.showSubItems=!e.showSubItems}}}):e._e()],1),e._v(" "),r("accordion-transition",[e.hasSubItems&&e.showSubItems?r("ul",{staticClass:"subfilter-list"},e._l(e.item.sub_areas,function(t){return r("FilterItem",{key:t.term_id,class:{selected:e.subitemIsSelected(t)},attrs:{selectedFilter:e.selectedFilter,item:t}})})):e._e()])],1)},i=[]},function(e,t,r){"use strict";function n(e){r(30)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(5),s=r(31),a=r(0),o=n,c=Object(a.a)(i.a,s.a,s.b,!1,o,null,null);t.default=c.exports},function(e,t){},function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return i});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"slide-fade"}},[r(e.elementType,{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],tag:"component",staticClass:"filter-list"},[e._t("default")],2)],1)},i=[]},function(e,t,r){"use strict";function n(e){r(33)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(6),s=r(34),a=r(0),o=n,c=Object(a.a)(i.a,s.a,s.b,!1,o,null,null);t.default=c.exports},function(e,t){},function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return i});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._g({staticClass:"filter-list-heading",on:{click:e.handleToggle}},e.$listeners),[r("h2",{staticClass:"heading",domProps:{innerHTML:e._s(e.heading)}}),e._v(" "),e.mobile?r("icon",{attrs:{icon:e.currentIcon,color:e.iconDropdownColor,size:"30px"}}):e._e(),e._v(" "),!e.mobile&&e.selectedFilter?r("div",{staticClass:"filter-clear",on:{click:function(t){e.$emit("update:selectedFilter",null)}}},[e._t("filter-clear",[e._v("\n      Clear\n      "),r("icon",{staticClass:"icon-button",attrs:{icon:"clear-search",color:e.iconResetColor}})])],2):e._e()],1)},i=[]},function(e,t,r){"use strict";function n(e){r(36)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(7),s=r(37),a=r(0),o=n,c=Object(a.a)(i.a,s.a,s.b,!1,o,null,null);t.default=c.exports},function(e,t){},function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return i});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r(e.elementType,{tag:"component",staticClass:"filter-item filter-reset",class:{selected:e.isSelected}},[r("div",{staticClass:"filter-item-content",on:{click:e.updateSelected}},[e.isSelected?r("icon",{staticClass:"selected-indicator",attrs:{icon:"check"}}):e._e(),e._v(" "),r("span",{staticClass:"title",domProps:{innerHTML:e._s(e.title)}})],1)])},i=[]},function(e,t,r){"use strict";function n(e){r(39)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(8),s=r(51),a=r(0),o=n,c=Object(a.a)(i.a,s.a,s.b,!1,o,null,null);t.default=c.exports},function(e,t){},function(e,t){var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{attrs:{fill:"#fff",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),r("path",{attrs:{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}})])},n=function(){return"/Users/droyer/Learning House/vlh-library/src/assets/images/check.svg"};e.exports={render:r,toString:n}},function(e,t){var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{attrs:{fill:"#ca0000",height:"27",viewBox:"0 0 24 24",width:"27",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}}),r("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])},n=function(){return"/Users/droyer/Learning House/vlh-library/src/assets/images/icon-hide.svg"};e.exports={render:r,toString:n}},function(e,t){var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{attrs:{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),r("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}})])},n=function(){return"/Users/droyer/Learning House/vlh-library/src/assets/images/icon-show.svg"};e.exports={render:r,toString:n}},function(e,t){var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{attrs:{fill:"#9E9E9E",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),r("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}})])},n=function(){return"/Users/droyer/Learning House/vlh-library/src/assets/images/show-subfilters.svg"};e.exports={render:r,toString:n}},function(e,t){var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{attrs:{fill:"#9e9e9e",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),r("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10z"}})])},n=function(){return"/Users/droyer/Learning House/vlh-library/src/assets/images/hide-subfilters.svg"};e.exports={render:r,toString:n}},function(e,t){var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{attrs:{fill:"#fff",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}}),r("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])},n=function(){return"/Users/droyer/Learning House/vlh-library/src/assets/images/search.svg"};e.exports={render:r,toString:n}},function(e,t){var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{attrs:{fill:"#fff",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}),r("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])},n=function(){return"/Users/droyer/Learning House/vlh-library/src/assets/images/clear-search.svg"};e.exports={render:r,toString:n}},function(e,t){var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{attrs:{fill:"#A81D32",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"}}),r("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])},n=function(){return"/Users/droyer/Learning House/vlh-library/src/assets/images/arrow-up.svg"};e.exports={render:r,toString:n}},function(e,t){var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{attrs:{fill:"#A81D32",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}}),r("path",{attrs:{d:"M0-.75h24v24H0z",fill:"none"}})])},n=function(){return"/Users/droyer/Learning House/vlh-library/src/assets/images/arrow-down.svg"};e.exports={render:r,toString:n}},function(e,t){var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 44.238 44.238"}},[r("path",{attrs:{d:"M22.119 44.237C9.922 44.237 0 34.315 0 22.12 0 9.924 9.922.001 22.119.001S44.238 9.923 44.238 22.12s-9.924 22.117-22.119 22.117zm0-42.736C10.75 1.501 1.5 10.751 1.5 22.12s9.25 20.619 20.619 20.619 20.619-9.25 20.619-20.619-9.25-20.619-20.619-20.619z"}}),r("path",{attrs:{d:"M31.434 22.869H12.805a.75.75 0 0 1 0-1.5h18.628a.75.75 0 0 1 .001 1.5z"}}),r("path",{attrs:{d:"M22.119 32.183a.75.75 0 0 1-.75-.75V12.806a.75.75 0 0 1 1.5 0v18.626a.75.75 0 0 1-.75.751z"}})])},n=function(){return"/Users/droyer/Learning House/vlh-library/src/assets/images/add-circle-outline.svg"};e.exports={render:r,toString:n}},function(e,t){var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 44.238 44.238"}},[r("path",{attrs:{d:"M22.119 44.237C9.922 44.237 0 34.315 0 22.12 0 9.924 9.922.001 22.119.001S44.238 9.923 44.238 22.12s-9.922 22.117-22.119 22.117zm0-42.736C10.75 1.501 1.5 10.751 1.5 22.12s9.25 20.619 20.619 20.619 20.619-9.25 20.619-20.619-9.25-20.619-20.619-20.619z"}}),r("path",{attrs:{d:"M31.434 22.869H12.805a.75.75 0 0 1 0-1.5h18.628a.75.75 0 0 1 .001 1.5z"}})])},n=function(){return"/Users/droyer/Learning House/vlh-library/src/assets/images/remove-circle-outline.svg"};e.exports={render:r,toString:n}},function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return i});var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.icon,{tag:"component",staticClass:"icon",style:{fill:e.color,width:e.size,height:e.size},attrs:{id:e.id}})},i=[]},function(e,t,r){"use strict";function n(e){r(53)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(9),s=r(55),a=r(0),o=n,c=Object(a.a)(i.a,s.a,s.b,!1,o,"data-v-a1531c2e",null);t.default=c.exports},function(e,t){},function(e,t,r){"use strict";function n(e,t,r){var n;return function(){var i=this,s=arguments,a=function(){n=null,r||e.apply(i,s)},o=r&&!n;clearTimeout(n),n=setTimeout(a,t),o&&e.apply(i,s)}}t.a=n},function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return i});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"search-filter"},[r("label",{staticClass:"sr-only",attrs:{for:"searchFilter"}},[e._v("Search For a Degree")]),e._v(" "),r("input",e._b({staticClass:"search-filter-input",attrs:{name:"searchFilter",type:"text"},domProps:{value:e.value},on:{input:function(t){e.debouncedSearch(t.target.value)}}},"input",e.$attrs,!1)),e._v(" "),r("div",{staticClass:"search-icon-wrapper",class:{clickable:e.searchQueryExists},attrs:{role:"button","aria-label":"Clear Search",tabindex:"0"},on:{click:e.clearSearch,keypress:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.clearSearch(t):null}}},[r("icon",{key:e.searchFilterIcon,staticClass:"search-icon",attrs:{size:"24px",icon:e.searchFilterIcon,alt:"Search Box"}})],1)])},i=[]}])});