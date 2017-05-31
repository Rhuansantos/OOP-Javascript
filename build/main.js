(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Crud = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _petProfile = require('./petProfile');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Crud = exports.Crud = function (_Pet) {
  _inherits(Crud, _Pet);

  function Crud() {
    _classCallCheck(this, Crud);

    var _this = _possibleConstructorReturn(this, (Crud.__proto__ || Object.getPrototypeOf(Crud)).call(this));

    _this.container = document.getElementById('main');
    _this.create();
    return _this;
  }

  _createClass(Crud, [{
    key: 'create',
    value: function create() {

      console.log('from create', this.name);
      var template = '\n        <h1>' + this.name + '</h1>\n        <h1>' + this.age + '</h1>\n        <hr />\n      ';

      // this.container.innerHtml(template);
      this.container.insertAdjacentHTML('beforebegin', template);
    }
  }, {
    key: 'delete',
    value: function _delete() {}
  }, {
    key: 'update',
    value: function update() {}
  }]);

  return Crud;
}(_petProfile.Pet);

},{"./petProfile":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pet = exports.Pet = function Pet() {
  _classCallCheck(this, Pet);

  this.name = document.getElementById('name').value;
  this.age = document.getElementById('age').value;
};

},{}],3:[function(require,module,exports){
'use strict';

var _crud = require('./core/crud');

// waiting for the document to be ready
window.addEventListener("load", function () {

  // form
  var petForm = document.getElementById('insertPet');

  petForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var page = new _crud.Crud();
  });
});

},{"./core/crud":1}]},{},[3]);
