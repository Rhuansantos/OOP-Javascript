(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PetCreate = exports.petArray = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _petProfile = require('./petProfile');

var _util = require('./util');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var petArray = exports.petArray = [];

var PetCreate = exports.PetCreate = function (_PetProfile) {
  _inherits(PetCreate, _PetProfile);

  function PetCreate() {
    _classCallCheck(this, PetCreate);

    var _this = _possibleConstructorReturn(this, (PetCreate.__proto__ || Object.getPrototypeOf(PetCreate)).call(this));

    _this.create();

    return _this;
  }

  _createClass(PetCreate, [{
    key: 'create',
    value: function create() {
      var petContainer = document.getElementById('petList');
      var shelterStatic = document.getElementById('shelter').value;

      // checking the array
      for (var i = 0; i < petArray.length; i++) {
        if (petArray[i].shelter === shelterStatic) {
          console.log('looks same');
        } else {
          // if something looks diferent then change it for every single element
          petArray.forEach(function (el, i) {
            petArray[i].shelter = shelterStatic;
          });
        }
      }

      petArray.forEach(function (el, i) {

        var ageAvg = _util.Util.avg(petArray[i].age, petArray.length);
        console.log(ageAvg);
        document.getElementById('ageAvg').innerHTML = ageAvg;

        var template = '\n        <li data-key=' + i + '>\n             <h1>' + petArray[i].name + '</h1>\n             <h1>' + petArray[i].age + '</h1>\n             <h1>' + petArray[i].shelter + '</h1>\n            <hr />\n        </li>\n      ';

        petContainer.insertAdjacentHTML('beforeend', template);
      });
    }
  }]);

  return PetCreate;
}(_petProfile.PetProfile);

},{"./petProfile":2,"./util":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PetProfile = exports.PetProfile = function PetProfile() {
  _classCallCheck(this, PetProfile);

  this.name = document.getElementById('name').value;
  this.age = document.getElementById('age').value;
  this.shelter = document.getElementById('shelter').value;

  console.log('load petProfile');
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Util = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _crud = require('./crud');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = exports.Util = function () {
	function Util() {
		_classCallCheck(this, Util);
	}
	// _n = total
	// _l = length


	_createClass(Util, null, [{
		key: 'avg',
		value: function avg(_n, _l) {
			var total = 0;
			for (var i = 0; i < _l; i++) {
				total = +_n;
			}
			var avg = total / _l;
			return Math.round(avg);
		}
	}]);

	return Util;
}();

},{"./crud":1}],4:[function(require,module,exports){
'use strict';

var _crud = require('./core/crud');

// waiting for the document to be ready
window.addEventListener("load", function () {

	var petForm = document.getElementById('insertPet');
	var petContainer = document.getElementById('petList');
	var petList = document.querySelectorAll('#petList li');
	console.log(petList);

	// listen to the form
	petForm.addEventListener('submit', function (e) {
		e.preventDefault();
		petContainer.innerHTML = '';
		var newPet = new _crud.PetCreate();
		_crud.petArray.push(newPet);
	});
});

},{"./core/crud":1}]},{},[4]);
