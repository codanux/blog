(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/AuthLayout.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/AuthLayout.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MyLayout',
  data: function data() {
    return {
      leftDrawerOpen: false,
      appName: "Laravel"
    };
  },
  computed: {
    routes: function routes() {
      return this.$router.options.routes;
    }
  },
  mounted: function mounted() {
    console.log(this.$router.options.routes);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/AuthLayout.vue?vue&type=template&id=3d871156&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/AuthLayout.vue?vue&type=template&id=3d871156& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "q-layout",
    { staticClass: "bg-white", attrs: { view: "lHh Lpr lFf" } },
    [
      _c(
        "q-header",
        { attrs: { elevated: "" } },
        [
          _c(
            "q-toolbar",
            [
              _c("q-btn", {
                attrs: {
                  flat: "",
                  dense: "",
                  round: "",
                  "aria-label": "Menu",
                  icon: "menu"
                },
                on: {
                  click: function($event) {
                    _vm.leftDrawerOpen = !_vm.leftDrawerOpen
                  }
                }
              }),
              _vm._v(" "),
              _c("q-toolbar-title", [
                _vm._v(
                  "\n                " + _vm._s(_vm.appName) + "\n            "
                )
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "q-drawer",
        {
          attrs: {
            "show-if-above": "",
            bordered: "",
            "content-class": "bg-grey-2"
          },
          model: {
            value: _vm.leftDrawerOpen,
            callback: function($$v) {
              _vm.leftDrawerOpen = $$v
            },
            expression: "leftDrawerOpen"
          }
        },
        [
          _c(
            "q-list",
            [
              _c("q-item-label", { attrs: { header: "" } }, [_vm._v("Router")]),
              _vm._v(" "),
              _vm._l(_vm.routes, function(route) {
                return _vm._l(route.children, function(route) {
                  return _c("router-link", {
                    key: route.path,
                    attrs: { to: route.path },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "default",
                          fn: function(ref) {
                            var href = ref.href
                            return [
                              _c(
                                "q-item",
                                {
                                  attrs: {
                                    clickable: "",
                                    rel: "noopener",
                                    tag: "a",
                                    href: href
                                  }
                                },
                                [
                                  _c(
                                    "q-item-section",
                                    { attrs: { avatar: "" } },
                                    [
                                      _c("q-icon", {
                                        attrs: { name: route.icon }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "q-item-section",
                                    [
                                      _c("q-item-label", [
                                        _vm._v(_vm._s(route.name))
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
                  })
                })
              })
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("q-page-container", [_c("router-view")], 1)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/layouts/AuthLayout.vue":
/*!*********************************************!*\
  !*** ./resources/js/layouts/AuthLayout.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthLayout_vue_vue_type_template_id_3d871156___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthLayout.vue?vue&type=template&id=3d871156& */ "./resources/js/layouts/AuthLayout.vue?vue&type=template&id=3d871156&");
/* harmony import */ var _AuthLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthLayout.vue?vue&type=script&lang=js& */ "./resources/js/layouts/AuthLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AuthLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthLayout_vue_vue_type_template_id_3d871156___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuthLayout_vue_vue_type_template_id_3d871156___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/AuthLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/AuthLayout.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/layouts/AuthLayout.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AuthLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/AuthLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/AuthLayout.vue?vue&type=template&id=3d871156&":
/*!****************************************************************************!*\
  !*** ./resources/js/layouts/AuthLayout.vue?vue&type=template&id=3d871156& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthLayout_vue_vue_type_template_id_3d871156___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AuthLayout.vue?vue&type=template&id=3d871156& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/AuthLayout.vue?vue&type=template&id=3d871156&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthLayout_vue_vue_type_template_id_3d871156___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthLayout_vue_vue_type_template_id_3d871156___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);