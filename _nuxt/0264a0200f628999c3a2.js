(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{182:function(t,e,r){var content=r(184);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("1ba215ae",content,!0,{sourceMap:!1})},183:function(t,e,r){"use strict";var n=r(182);r.n(n).a},184:function(t,e,r){(t.exports=r(16)(!1)).push([t.i,".card-image[data-v-77c435d1]{position:relative}.photo-container[data-v-77c435d1]{height:300px}.photo[data-v-77c435d1]{height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.legend[data-v-77c435d1]{position:absolute;bottom:0;width:100%}.legend-title[data-v-77c435d1]{text-align:center;color:#fff;padding:.8rem;background-color:rgba(0,0,0,.6)}.legend-title .title[data-v-77c435d1]{color:#fff}",""])},185:function(t,e,r){"use strict";var n={props:{imageUrl:{type:String,required:!0},legend:{type:String,default:null}}},o=(r(183),r(4)),component=Object(o.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"photo-card card-image"},[e("div",{staticClass:"photo-container"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:this.imageUrl,expression:"imageUrl"}],staticClass:"photo",attrs:{alt:""}})]),this._v(" "),this.$slots.default?e("div",{staticClass:"legend"},[e("p",{staticClass:"legend-title"},[this._t("default")],2)]):this._e()])},[],!1,null,"77c435d1",null);e.a=component.exports},187:function(t,e,r){var content=r(195);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("eab7943e",content,!0,{sourceMap:!1})},188:function(t,e,r){"use strict";var n={props:{itemsByRow:{type:String,default:"4"},itemKey:{type:Function,default:function(t,e){return e}},items:{type:Array,default:[]}},computed:{columnClasses:function(){return"column is-"+12/this.itemsByRow},columns:function(){var t=0,e={};for(var r in this.items)r%this.itemsByRow==0&&(e[++t]=[]),e[t].push(this.items[r]);return e}}},o=r(4),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.columns,function(e,n){return r("div",{key:n,staticClass:"columns"},t._l(e,function(e,n){return r("div",{key:t.itemKey(e,n),class:t.columnClasses},[t._t("default",null,{item:e,index:n})],2)}),0)}),0)},[],!1,null,null,null);e.a=component.exports},189:function(t,e,r){"use strict";var n={props:{tags:{type:Array,required:!0}}},o=r(4),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.tags,function(e){return r("span",{key:e,staticClass:"tag is-light",staticStyle:{"margin-right":"5px"}},[t._v(t._s(e))])}),0)},[],!1,null,null,null);e.a=component.exports},190:function(t,e,r){"use strict";function n(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.d(e,"a",function(){return n})},194:function(t,e,r){"use strict";var n=r(187);r.n(n).a},195:function(t,e,r){(t.exports=r(16)(!1)).push([t.i,"p.control[data-v-6f1534be]{display:inline-block;width:100%;max-width:900px}",""])},196:function(t,e,r){"use strict";r.r(e);r(26);var n=r(190),o=r(189),c=r(185),l={components:{Tags:o.a,PhotoCard:c.a},props:{person:{type:Object,required:!0}},methods:{detail:function(){this.$router.push({path:"/person/".concat(this.person.$slug),query:{search:this.$store.getters.currentSearch}})}}},d=r(4),h={components:{PersonCard:Object(d.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"person",attrs:{id:"person-"+t.person.$slug}},[r("div",{staticClass:"card",on:{click:function(e){return t.detail()}}},[r("PhotoCard",{attrs:{imageUrl:t.person.photo}},[r("span",{staticClass:"title is-4"},[t._v(t._s(t.person.prenom)+" "+t._s(t.person.nom))])]),t._v(" "),r("div",{staticClass:"card-content"},[r("h2",{staticClass:"has-text-centered",staticStyle:{"font-size":"20px"}},[t._v("\n        "+t._s(t.person.titre)+"\n      ")]),t._v(" "),r("h3",{directives:[{name:"show",rawName:"v-show",value:t.person.sous_titre,expression:"person.sous_titre"}],staticClass:"has-text-centered",staticStyle:{"font-size":"15px","font-style":"italic"}},[t._v("\n        "+t._s(t.person.sous_titre)+"\n      ")]),t._v(" "),r("div",{staticClass:"has-text-centered",staticStyle:{"padding-top":"1em"}},[r("Tags",{staticClass:"domaines-metiers",attrs:{tags:t.person.domaines_metiers}})],1),t._v(" "),r("div",{staticClass:"has-text-centered",staticStyle:{"padding-top":"1em"}},[r("Tags",{staticClass:"technologies",attrs:{tags:t.person.technologies}})],1),t._v(" "),r("div",{staticClass:"content"},[r("div",{staticClass:"has-text-centered"},[r("br"),t._v(" "),r("nuxt-link",{staticClass:"button is-warning",attrs:{to:{path:"/person/"+t.person.$slug,query:{search:t.$store.getters.currentSearch}}}},[t._v("Voir le profil")])],1)])])],1)])},[],!1,null,null,null).exports,BulmaGrid:r(188).a},props:{persons:{type:Array,required:!0}}},f=Object(d.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("BulmaGrid",{attrs:{items:this.persons,itemsByRow:"3",itemKey:function(t){return t.$slug}},scopedSlots:this._u([{key:"default",fn:function(t){var r=t.item;return[e("PersonCard",{attrs:{person:r}})]}}])})},[],!1,null,null,null).exports,v={props:{value:{type:String,required:!0}}},m=(r(194),Object(d.a)(v,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"field has-text-centered"},[r("p",{staticClass:"control has-icons-left"},[r("input",{staticClass:"input is-medium is-flat",attrs:{"aria-label":"Rechercher un développeur par mot-clef",id:"search",type:"text",placeholder:"Site, Boutique, Application mobile, React, WordPress, Java, PHP ..."},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fas fa-search"})])}],!1,null,"6f1534be",null).exports),content=r(186),_={scrollToTop:!1,components:{Persons:f,PersonsSearchForm:m},data:function(){return{persons:Object(n.a)(Object(content.c)())}},computed:{title:function(){return"Popcorn : trouvez un·e développeur·e freelance à Nantes"},subtitle:function(){return"La plateforme avec (vraiment) 0% de commission"}},methods:{onInput:function(t){this.$store.commit("setCurrentSearch",t),this.persons=this.filterPersons(t)},filterPersons:function(text){var t=Object(content.c)().filter(function(t){var e=!1;t._exactMatch=!1;var r=text.toLowerCase().trim();return t.$search_keywords.forEach(function(n){(n=n.toLowerCase()).indexOf(r)>-1&&(e=!0,r.length===n.length&&(t._exactMatch=!0))}),e});return t=t.sort(function(a,b){return b._exactMatch-a._exactMatch})}},created:function(){this.$store.state.currentSearch.trim()&&(this.persons=this.filterPersons(this.$store.state.currentSearch))}},y=Object(d.a)(_,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container has-text-centered",staticStyle:{"margin-top":"2rem"}},[r("h1",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),r("h2",{staticClass:"subtitle"},[r("em",[t._v(t._s(t.subtitle))])])]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"section"},[r("div",{staticStyle:{"padding-bottom":"3em"}},[r("PersonsSearchForm",{attrs:{value:t.$store.state.currentSearch},on:{input:t.onInput}})],1),t._v(" "),r("Persons",{attrs:{persons:t.persons}})],1)])])},[],!1,null,null,null);e.default=y.exports}}]);