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

var _Page = require('../components/Page');

var _Page2 = _interopRequireDefault(_Page);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/juliaricketti/Workspace/cbt/pages/signin.js?entry';


var SignIn = function (_React$Component) {
  (0, _inherits3.default)(SignIn, _React$Component);

  function SignIn(props) {
    (0, _classCallCheck3.default)(this, SignIn);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SignIn.__proto__ || (0, _getPrototypeOf2.default)(SignIn)).call(this, props));

    _this.state = {
      email: '',
      password: ''
    };
    return _this;
  }

  (0, _createClass3.default)(SignIn, [{
    key: 'handleChangeForms',
    value: function handleChangeForms(target, value) {
      var obj = {};
      obj[target] = value;
      this.setState(obj);
    }
  }, {
    key: 'handleSignUpButton',
    value: function handleSignUpButton(evt) {
      evt.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          email = _state.email,
          password = _state.password;

      return _react2.default.createElement(_Page2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(_semanticUiReact.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, 'Sign In'), _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Input, {
        label: 'Email',
        type: 'email',
        value: email,
        onChange: function onChange(evt) {
          return _this2.handleChangeForms('email', evt.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Input, {
        label: 'Password',
        type: 'password',
        value: password,
        onChange: function onChange(evt) {
          return _this2.handleChangeForms('password', evt.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), _react2.default.createElement(_semanticUiReact.Divider, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { onClick: function onClick(evt) {
          return _this2.handleSignUpButton(evt);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, 'Sign In'), _react2.default.createElement(_link2.default, { href: '/signup', __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'New to the app? Sign up here!')));
    }
  }]);

  return SignIn;
}(_react2.default.Component);

exports.default = SignIn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NpZ25pbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlBhZ2UiLCJMaW5rIiwiRm9ybSIsIkJ1dHRvbiIsIkRpdmlkZXIiLCJIZWFkZXIiLCJTaWduSW4iLCJwcm9wcyIsInN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsInRhcmdldCIsInZhbHVlIiwib2JqIiwic2V0U3RhdGUiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNoYW5nZUZvcm1zIiwiaGFuZGxlU2lnblVwQnV0dG9uIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTzs7OztBQUNQLEFBQVMsQUFBTSxBQUFRLEFBQVM7Ozs7Ozs7SUFFWCxBO2tDQUNuQjs7a0JBQUEsQUFBYSxPQUFPO3dDQUFBOztzSUFBQSxBQUNaLEFBRU47O1VBQUEsQUFBSzthQUFRLEFBQ0osQUFDUDtnQkFMZ0IsQUFHbEIsQUFBYSxBQUVEO0FBRkMsQUFDWDtXQUdIOzs7OztzQyxBQUVrQixRLEFBQVEsT0FBTyxBQUNoQztVQUFNLE1BQU4sQUFBWSxBQUNaO1VBQUEsQUFBSSxVQUFKLEFBQWMsQUFDZDtXQUFBLEFBQUssU0FBTCxBQUFjLEFBQ2Y7Ozs7dUMsQUFFbUIsS0FBSyxBQUN2QjtVQUFBLEFBQUksQUFDTDs7Ozs2QkFFUzttQkFBQTs7bUJBQ29CLEtBRHBCLEFBQ3lCO1VBRHpCLEFBQ0EsZUFEQSxBQUNBO1VBREEsQUFDTyxrQkFEUCxBQUNPLEFBQ2Y7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDRCQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHVDQUNFLEFBQUMsc0JBQUQsQUFBTTtlQUFOLEFBQ1EsQUFDTjtjQUZGLEFBRU8sQUFDTDtlQUhGLEFBR1MsQUFDUDtrQkFBVSxrQkFBQSxBQUFDLEtBQUQ7aUJBQVMsT0FBQSxBQUFLLGtCQUFMLEFBQXVCLFNBQVMsSUFBQSxBQUFJLE9BQTdDLEFBQVMsQUFBMkM7QUFKaEU7O29CQUFBO3NCQURGLEFBQ0UsQUFNQTtBQU5BO0FBQ0Usd0NBS0YsQUFBQyxzQkFBRCxBQUFNO2VBQU4sQUFDUSxBQUNOO2NBRkYsQUFFTyxBQUNMO2VBSEYsQUFHUyxBQUNQO2tCQUFVLGtCQUFBLEFBQUMsS0FBRDtpQkFBUyxPQUFBLEFBQUssa0JBQUwsQUFBdUIsWUFBWSxJQUFBLEFBQUksT0FBaEQsQUFBUyxBQUE4QztBQUpuRTs7b0JBQUE7c0JBUEYsQUFPRSxBQU1BO0FBTkE7QUFDRSwwQkFLRixBQUFDOztvQkFBRDtzQkFiRixBQWFFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUMseUNBQU8sU0FBUyxpQkFBQSxBQUFDLEtBQUQ7aUJBQVMsT0FBQSxBQUFLLG1CQUFkLEFBQVMsQUFBd0I7QUFBbEQ7b0JBQUE7c0JBQUE7QUFBQTtTQWRGLEFBY0UsQUFDQSw0QkFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBQTtBQUFBO1NBbEJOLEFBQ0UsQUFFRSxBQWVFLEFBSVA7Ozs7O0VBNUNpQyxnQkFBTSxBOztrQkFBckIsQSIsImZpbGUiOiJzaWduaW4uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2p1bGlhcmlja2V0dGkvV29ya3NwYWNlL2NidCJ9