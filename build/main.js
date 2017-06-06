(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreatePet = exports.petArray = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _petProfile = require('./petProfile');

var _util = require('./util');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var petArray = exports.petArray = [];

var CreatePet = exports.CreatePet = function (_Pet) {
  _inherits(CreatePet, _Pet);

  function CreatePet() {
    _classCallCheck(this, CreatePet);

    var _this = _possibleConstructorReturn(this, (CreatePet.__proto__ || Object.getPrototypeOf(CreatePet)).call(this));

    _this.petType = _this.type.options[_this.type.selectedIndex].value;
    _this.create();
    return _this;
  }

  _createClass(CreatePet, [{
    key: 'create',
    value: function create() {
      petArray.push(this);
      var petContainer = document.getElementById('petList');
      var shelterStatic = document.getElementById('shelter').value;
      // checking the array
      for (var i = 0; i < petArray.length; i++) {
        // if something looks diferent then change it for every single element
        if (petArray[i].shelter != shelterStatic) {
          petArray.forEach(function (el, i) {
            petArray[i].shelter = shelterStatic;
          });
        }
      }
      console.log(shelterStatic);
      var tempAge = [];
      // print pets from array
      petArray.forEach(function (el, i) {
        // getting age avg from static method
        tempAge.push(Number(el.age));
        var template = '\n        <li data-key=' + i + '>\n           <h4>Name: ' + el.name + '</h4>\n           <h4>Age: ' + el.age + '</h4>\n           <h4>Type: ' + el.petType + '</h4>\n           <h4>Location: ' + el.shelter + '</h4>\n            <hr />\n        </li>\n      ';
        petContainer.insertAdjacentHTML('beforeend', template);
      });
      var ageAvg = _util.Util.avg(tempAge);
      document.getElementById('ageAvg').innerHTML = ageAvg;
    }
  }]);

  return CreatePet;
}(_petProfile.Pet);

},{"./petProfile":2,"./util":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pet = undefined;

var _shelter = require('./shelter');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pet = exports.Pet = function (_Shelter) {
  _inherits(Pet, _Shelter);

  function Pet() {
    _classCallCheck(this, Pet);

    var _this = _possibleConstructorReturn(this, (Pet.__proto__ || Object.getPrototypeOf(Pet)).call(this));

    _this.name = document.getElementById('name').value;
    _this.age = document.getElementById('age').value;
    _this.type = document.getElementById('type');
    _this.shelterLocation = document.getElementById('shelter').value; ////overide from Shelter

    return _this;
  }

  return Pet;
}(_shelter.Shelter);

},{"./shelter":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shelter = exports.Shelter = function Shelter() {
	_classCallCheck(this, Shelter);

	this.shelterId = 0;
	this.shelterLocation = "Orlando-Fl";
};

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = exports.Util = function () {
	function Util() {
		_classCallCheck(this, Util);
	}

	_createClass(Util, null, [{
		key: "avg",
		value: function avg(_n) {
			var total = 0;
			var avg = 0;
			_n.forEach(function (_el) {
				total += _el;
				avg = total / _n.length;
			});
			return Math.round(avg);
		}
	}]);

	return Util;
}();

},{}],5:[function(require,module,exports){
'use strict';

var _crud = require('./core/crud');

// waiting for the document to be ready
window.addEventListener("load", function () {

	var petForm = document.getElementById('insertPet');
	var petContainer = document.getElementById('petList');

	// listen to the form
	petForm.addEventListener('submit', function (e) {
		e.preventDefault();
		petContainer.innerHTML = '';
		var newPet = new _crud.CreatePet();
	});
});

},{"./core/crud":1}]},{},[5]);
