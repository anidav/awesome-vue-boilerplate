(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{152:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("This project uses "),a("router-link",{attrs:{to:"./tech.html#vue-router"}},[t._v("Vue Router")]),t._v(", which we initialize in "),a("code",[t._v("src/router/index.js")]),t._v(", with routes defined in "),a("code",[t._v("src/router/routes.js")]),t._v(". Inside the "),a("code",[t._v("src/router")]),t._v(" folder, there are also two sub-folders, both containing route-specific components: "),a("code",[t._v("layouts")]),t._v(" and "),a("code",[t._v("views")]),t._v(".")],1),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("Here's an example:")]),t._v(" "),t._m(5),t._m(6),t._v(" "),a("p",[t._v("Each view component will be used by at least one route in "),a("code",[t._v("src/router/routes/*.routes.js")]),t._v(", to provide a template for the page. They can technically include some additional properties from Vue Router "),a("a",{attrs:{href:"https://router.vuejs.org/guide/advanced/navigation-guards.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("to control navigation"),a("OutboundLink")],1),t._v(", for example to "),a("a",{attrs:{href:"https://router.vuejs.org/guide/advanced/data-fetching.html#fetching-before-navigation",target:"_blank",rel:"noopener noreferrer"}},[t._v("fetch data"),a("OutboundLink")],1),t._v(" before creating the component, but I recommend adding these guards to "),a("code",[t._v("src/router/index.js")]),t._v(" instead, as that behavior typically has much more to do with the route (and will sometimes be shared between routes) than it does the view component.")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"routing-layouts-and-views"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#routing-layouts-and-views","aria-hidden":"true"}},[this._v("#")]),this._v(" Routing, layouts, and views")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"#routing-layouts-and-views"}},[this._v("Routing, layouts, and views")]),this._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#overview"}},[this._v("Overview")])]),this._v(" "),e("li",[e("a",{attrs:{href:"#layouts"}},[this._v("Layouts")])]),this._v(" "),e("li",[e("a",{attrs:{href:"#views"}},[this._v("Views")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"layouts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#layouts","aria-hidden":"true"}},[this._v("#")]),this._v(" Layouts")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Every view component must use a layout component as its base and register it as "),e("code",[this._v("Layout")]),this._v(", as this convention helps us mock out layout components when testing views. Layouts usually aren't very complex, often containing only shared HTML like headers, footers, and navigation to surround the main content in the view.\nTo use Layout add name as additional option for your view component.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    layout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'main'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"views"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#views","aria-hidden":"true"}},[this._v("#")]),this._v(" Views")])}],!1,null,null,null);r.options.__file="routing.md";e.default=r.exports}}]);