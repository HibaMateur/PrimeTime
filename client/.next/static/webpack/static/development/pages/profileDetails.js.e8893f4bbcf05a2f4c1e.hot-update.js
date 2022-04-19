webpackHotUpdate("static\\development\\pages\\profileDetails.js",{

/***/ "./pages/profileDetails.js":
/*!*********************************!*\
  !*** ./pages/profileDetails.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_common_common_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/common/common-layout */ "./containers/common/common-layout.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_assets_person_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/assets/person.css */ "./public/assets/person.css");
/* harmony import */ var _public_assets_person_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_person_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_StreamCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/StreamCard */ "./components/StreamCard.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Wissem\\Desktop\\PrimeTime\\client\\pages\\profileDetails.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var PortfolioDetail7 = function PortfolioDetail7() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      expires = _useState[0],
      setExpires = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    firstName: "",
    lastName: ""
  }),
      user = _useState2[0],
      setUser = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      imgsrc = _useState3[0],
      setImgsrc = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (user) setImgsrc("images/users/" + user["firstName"] + user["lastName"] + ".jpg");
    setExpires(user["expiration"]);
  }, [user]);

  var onInputChange = function onInputChange(e) {
    var formData = new FormData();
    formData.append('username', user["firstName"] + user["lastName"]);
    formData.append('photo', e.target.files[0]);
    var config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("http://localhost:5000/user/uploadProfileImg", formData, config).then(window.location.reload());
  };

  var imgClicked = function imgClicked(e) {
    e.preventDefault();
    document.getElementById('file-input').click();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(_containers_common_common_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pathList: ['portfolio details', 'left side image portfolio'],
    pathTitle: "left side image portfolio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "d-flex",
    style: {
      "height": "1080px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "isar w-25 pl-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "d-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "product-right pro_sticky_info w-100",
    style: {
      "margin-right": "50%"
    },
    "data-sticky_column": true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "portfolio-detail m-b-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 49
    }
  }, __jsx("h3", {
    className: "detail-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 53
    }
  }, "Profile detail"), __jsx("input", {
    type: "file",
    id: "file-input",
    style: {
      "overflow": "hidden",
      "height": "0px",
      "width": "0px"
    },
    accept: "image/*",
    onChange: onInputChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 53
    }
  }), __jsx("a", {
    onClick: imgClicked,
    className: "file-upload",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 52
    }
  }, " ", __jsx("img", {
    id: "profileimg",
    alt: "",
    className: "img-fluid rounded-circle w-50 ",
    src: imgsrc,
    style: {
      "margin-left": "5rem",
      "margin-bottom": "15%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 101
    }
  }), " "), __jsx("div", {
    className: "detail-container d-flex ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "portfolio-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 57
    }
  }, __jsx("h5", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 61
    }
  }, "First Name: ")), __jsx("div", {
    className: "portfolio-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 57
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 61
    }
  }, user["firstName"]))), __jsx("div", {
    className: "detail-container d-flex ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "portfolio-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 57
    }
  }, __jsx("h5", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 61
    }
  }, "Last Name: ")), __jsx("div", {
    className: "portfolio-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 57
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 61
    }
  }, user["firstName"]))), __jsx("div", {
    className: "detail-container d-flex ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "portfolio-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 57
    }
  }, __jsx("h5", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 61
    }
  }, "Birthday: ")), __jsx("div", {
    className: "portfolio-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 57
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 61
    }
  }, "00/00/0000"))), __jsx("div", {
    className: "detail-container d-flex ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "portfolio-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 57
    }
  }, __jsx("h5", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 61
    }
  }, "Phone: ")), __jsx("div", {
    className: "portfolio-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 57
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 61
    }
  }, "+216 00000000"))), __jsx("div", {
    className: "detail-container d-flex ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "portfolio-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 57
    }
  }, __jsx("h5", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 61
    }
  }, "Email: ")), __jsx("div", {
    className: "portfolio-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 57
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 61
    }
  }, user["email"]))), __jsx("div", {
    className: "detail-container d-flex ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "portfolio-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 57
    }
  }, __jsx("h5", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 61
    }
  }, "Role:")), __jsx("div", {
    className: "portfolio-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 57
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 61
    }
  }, user["role"]))), __jsx("div", {
    className: "detail-container d-flex ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "portfolio-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 57
    }
  }, __jsx("h5", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 61
    }
  }, "expiration:")), __jsx("div", {
    className: "portfolio-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 57
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 61
    }
  }, user["expiration"])))), __jsx("div", {
    className: "portfolio-detail",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 49
    }
  }, __jsx("h3", {
    className: "detail-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 53
    }
  }, "about project"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 53
    }
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), __jsx("div", {
    className: "text-right m-t-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 53
    }
  }, __jsx("a", {
    className: "btn btn-default primary-btn radius-0",
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 88
    }
  }, "visit project")))))), __jsx("div", {
    className: "imin",
    style: {
      "width": "75%",
      "margin-left": "2%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "d-flex",
    style: {
      "overflow": "scroll",
      "height": "50%",
      "width": "100%",
      "flex-wrap": "wrap"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 21
    }
  }, __jsx(_components_StreamCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 20
    }
  }), __jsx(_components_StreamCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 34
    }
  }), __jsx(_components_StreamCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 48
    }
  }), __jsx(_components_StreamCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 62
    }
  }), __jsx(_components_StreamCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 76
    }
  }), __jsx(_components_StreamCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 90
    }
  }), __jsx(_components_StreamCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 104
    }
  }), __jsx(_components_StreamCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 118
    }
  }), __jsx(_components_StreamCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 132
    }
  }), __jsx(_components_StreamCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 146
    }
  })), __jsx("div", {
    style: {
      "overflow": "scroll",
      "height": "50%",
      "width": "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 25
    }
  }, "test", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 94
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 103
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 112
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 121
    }
  }), "tessst"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (PortfolioDetail7);

/***/ })

})
//# sourceMappingURL=profileDetails.js.e8893f4bbcf05a2f4c1e.hot-update.js.map