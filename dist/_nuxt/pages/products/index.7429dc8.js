(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{387:function(t,e,o){"use strict";o.r(e);var n={props:{title:String}},r=o(19),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"breadcrumb-section"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12"},[o("nav",{staticClass:"theme-breadcrumb",attrs:{"aria-label":"breadcrumb"}},[o("ol",{staticClass:"breadcrumb"},[o("li",{staticClass:"breadcrumb-item"},[o("nuxt-link",{attrs:{to:{path:"#"}}},[t._v("Home")])],1),t._v(" "),t.title?o("li",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.title))]):t._e()])])]),t._v(" "),o("div",{staticClass:"col-12 breadcrumb-title"},[o("hr"),t._v(" "),o("h4",[t._v(t._s(t.title))]),t._v(" "),o("hr")])])])])])}),[],!1,null,null,null);e.default=component.exports},388:function(t,e,o){"use strict";o.r(e);o(390);var n={data:function(){return{swiperOption:{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},items:[{imagepath:o(215),title:"Fresh organic Tomatoes",subtitle:"Spring Sale 50% Off",alignclass:"p-left"},{imagepath:o(216),title:"Exclusive offer-20% off this week",subtitle:"Double BBQ Bacon Cheese 2019",alignclass:"p-left"},{imagepath:o(217),title:"Fresh organic Tomatoes",subtitle:"Spring Sale 50% Off",alignclass:"p-left"}]}}},r=o(19),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"slide-1 home-slider"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-lg-3 d-xs-none d-sm-none d-md-none d-lg-block d-xl-block"},[o("CategoriesNav")],1),t._v(" "),o("div",{staticClass:"col-12 col-lg-9"},[o("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[o("div",{staticClass:"swiper-wrapper"},t._l(t.items,(function(e,n){return o("div",{key:n,staticClass:"swiper-slide"},[o("div",{staticClass:"home text-center",class:e.alignclass,style:{"background-image":"url("+e.imagepath+")"}},[o("div",{staticClass:"slider-contain"},[o("div",[o("h1",[t._v(t._s(e.subtitle))]),t._v(" "),o("h4",[t._v(t._s(e.title))]),t._v(" "),o("nuxt-link",{staticClass:"btn theme-button mt-20",attrs:{to:{path:"/collection/leftsidebar/all"}}},[t._v("Read More")])],1)])])])})),0),t._v(" "),o("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),o("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CategoriesNav:o(390).default})},389:function(t,e,o){"use strict";o.r(e);var n={props:["product","index"],data:function(){return{imageSrc:""}},methods:{getImgUrl:function(path){return o(392)("./"+path)}}},r=o(19),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"product"},[o("div",{staticClass:"imageWrapper"},[o("div",{staticClass:"imageWrapperWrapper"},[o("div",{staticClass:"tag position-absolute"},[t._v(t._s(t.product.tag))]),t._v(" "),o("img",{attrs:{src:t.getImgUrl(t.imageSrc?t.imageSrc:t.product.productImage),alt:t.product.title}})]),t._v(" "),o("div",{staticClass:"discountedPriceSection"},[o("div",{staticClass:"discountedPrice"},[o("span",[t._v("$ ")]),t._v(" "),o("span",[t._v(t._s(t.product.price))])]),t._v(" "),o("div",{staticClass:"price"},[o("span",[t._v("$ ")]),t._v(" "),o("span",[t._v(t._s(t.product.oldPrice))])])]),t._v(" "),o("div",{staticClass:"name"},[t._v(t._s(t.product.title))]),t._v(" "),t._m(0)]),t._v(" "),t._m(1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"overlay text"},[e("p",{staticClass:"addText"},[this._v("Add to Shopping Bag")]),this._v(" "),e("span",[e("a",{staticClass:"btnShowDetails",attrs:{href:"/tatka-egg-pack-12pcs"}},[e("span",[this._v("Details")]),this._v(" "),e("span",[this._v("  >")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"addButtonWrapper border-radius-small theme-button"},[e("p",{staticClass:"buyText"},[this._v("Add to bag")])])}],!1,null,null,null);e.default=component.exports},390:function(t,e,o){"use strict";o.r(e);var n={},r=o(19),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"categories-nav d-none d-xs-none d-sm-none d-md-none d-lg-block d-xl-block"},[o("h5",{staticClass:"text-uppercase rounded-top"},[t._v("Categories")]),t._v(" "),o("b-nav",{attrs:{vertical:""}},[o("b-nav-item",{attrs:{to:"/categories/category-list"}},[t._v("Ocean Food"),o("i",{staticClass:"fas fa-angle-right"})]),t._v(" "),o("b-nav-item",{attrs:{to:"/categories/category-list"}},[t._v("Butter & Eggs"),o("i",{staticClass:"fas fa-angle-right"})]),t._v(" "),o("b-nav-item",{attrs:{to:"/categories/category-list"}},[t._v("Dried Fruits"),o("i",{staticClass:"fas fa-angle-right"})]),t._v(" "),o("b-nav-item",{attrs:{to:"/categories/category-list"}},[t._v("Fast Food"),o("i",{staticClass:"fas fa-angle-right"})]),t._v(" "),o("b-nav-item",{attrs:{to:"/categories/category-list"}},[t._v("Fresh Meat"),o("i",{staticClass:"fas fa-angle-right"})]),t._v(" "),o("b-nav-item",{attrs:{to:"/categories/category-list"}},[t._v("Fruits"),o("i",{staticClass:"fas fa-angle-right"})]),t._v(" "),o("b-nav-item",{attrs:{to:"/categories/category-list"}},[t._v("Milk & Cream"),o("i",{staticClass:"fas fa-angle-right"})]),t._v(" "),o("b-nav-item",{attrs:{to:"/categories/category-list"}},[t._v("Vegetables"),o("i",{staticClass:"fas fa-angle-right"})]),t._v(" "),o("b-nav-item",{attrs:{to:"/categories/category-list"}},[t._v("Prime Video"),o("i",{staticClass:"fas fa-angle-right"})])],1),t._v(" "),o("h6",[o("nuxt-link",{attrs:{to:"/categories/"}},[o("b-icon-plus"),t._v(" More Categories")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},392:function(t,e,o){var map={"./offer.svg":206,"./product-1.png":57,"./product-2.png":214,"./product-3.png":219,"./product-4.png":220};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=392},428:function(t,e,o){"use strict";o.r(e);o(388),o(387),o(389);var n={data:function(){return{bannerImg:o(218),products:[{id:1,title:"Elsha Fish",description:"Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",type:"popular",alt:"kazis supermarket",images:"1.jpg",price:"89",oldPrice:"95",tag:"on sale",productImage:"product-1.png"},{id:2,title:"Potato",description:"Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",type:"popular",alt:"kazis supermarket",images:"1.jpg",price:"89",oldPrice:"95",tag:"on sale",productImage:"product-2.png"},{id:3,title:"Ice-cream",description:"Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",type:"popular",alt:"kazis supermarket",images:"1.jpg",price:"89",oldPrice:"95",tag:"on sale",productImage:"product-3.png"},{id:4,title:"Checken Egg(Layer)",description:"Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",type:"popular",alt:"kazis supermarket",images:"1.jpg",price:"89",oldPrice:"95",tag:"on sale",productImage:"product-3.png"},{id:4,title:"Checken Egg(Layer)",description:"Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",type:"popular",alt:"kazis supermarket",images:"1.jpg",price:"89",oldPrice:"95",tag:"on sale",productImage:"product-1.png"},{id:5,title:"Checken Egg(Layer)",description:"Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",type:"popular",alt:"kazis supermarket",images:"1.jpg",price:"89",oldPrice:"95",tag:"on sale",productImage:"product-2.png"},{id:6,title:"Checken Egg(Layer)",description:"Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",type:"popular",alt:"kazis supermarket",images:"1.jpg",price:"89",oldPrice:"95",tag:"on sale",productImage:"product-3.png"},{id:7,title:"Tomato",description:"Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",type:"popular",alt:"kazis supermarket",images:"1.jpg",price:"89",oldPrice:"95",tag:"on sale",productImage:"product-4.png"},{id:8,title:"Tomato",description:"Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",type:"popular",alt:"kazis supermarket",images:"1.jpg",price:"89",oldPrice:"95",tag:"on sale",productImage:"product-1.png"},{id:9,title:"Tomato",description:"Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",type:"popular",alt:"kazis supermarket",images:"1.jpg",price:"89",oldPrice:"95",tag:"on sale",productImage:"product-2.png"},{id:10,title:"Tomato",description:"Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",type:"popular",alt:"kazis supermarket",images:"1.jpg",price:"89",oldPrice:"95",tag:"on sale",productImage:"product-3.png"},{id:11,title:"Tomato",description:"Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",type:"popular",alt:"kazis supermarket",images:"1.jpg",price:"89",oldPrice:"95",tag:"on sale",productImage:"product-4.png"}]}},methods:{getImgUrl:function(path){return o(392)("./"+path)}}},r=o(19),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("BannerHomeSlider"),this._v(" "),e("Breadcrumbs",{attrs:{title:"Product Title"}}),this._v(" "),e("section",{staticClass:"product-page section-b-space"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},this._l(this.products,(function(t,o){return e("ProductItem",{key:o,attrs:{product:t,index:o}})})),1)])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BannerHomeSlider:o(388).default,Breadcrumbs:o(387).default,ProductItem:o(389).default})}}]);