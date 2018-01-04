'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/juliaricketti/Workspace/cbt/components/Page.js';


var _class = function (_React$PureComponent) {
  (0, _inherits3.default)(_class, _React$PureComponent);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      var pathname = this.props.pathname;

      return _react2.default.createElement('div', { id: 'page', __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement(_Navbar2.default, { pathname: pathname, __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }), _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, this.props.children));
    }
  }]);

  return _class;
}(_react2.default.PureComponent);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGFnZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIk5hdmJhciIsIkNvbnRhaW5lciIsInBhdGhuYW1lIiwicHJvcHMiLCJjaGlsZHJlbiIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBR0c7VUFBQSxBQUNBLFdBQWEsS0FEYixBQUNrQixNQURsQixBQUNBLEFBQ1I7OzZCQUNFLGNBQUEsU0FBSyxJQUFMLEFBQVE7b0JBQVI7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQyxrQ0FBTyxVQUFSLEFBQWtCO29CQUFsQjtzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNHO0FBREg7QUFBQSxjQUNHLEFBQUssTUFKWixBQUNFLEFBRUUsQUFDYyxBQUluQjs7Ozs7RUFYMEIsZ0JBQU0sQSIsImZpbGUiOiJQYWdlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdWxpYXJpY2tldHRpL1dvcmtzcGFjZS9jYnQifQ==