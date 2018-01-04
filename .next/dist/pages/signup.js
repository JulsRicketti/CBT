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

var _jsxFileName = '/Users/juliaricketti/Workspace/cbt/pages/signup.js?entry';


var SignUp = function (_React$Component) {
  (0, _inherits3.default)(SignUp, _React$Component);

  function SignUp(props) {
    (0, _classCallCheck3.default)(this, SignUp);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SignUp.__proto__ || (0, _getPrototypeOf2.default)(SignUp)).call(this, props));

    _this.state = {
      email: '',
      password: '',
      passwordConfirm: ''
    };
    return _this;
  }

  (0, _createClass3.default)(SignUp, [{
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
          password = _state.password,
          passwordConfirm = _state.passwordConfirm;

      return _react2.default.createElement(_Page2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement(_semanticUiReact.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, 'Sign Up'), _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
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
          lineNumber: 33
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
          lineNumber: 39
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Input, {
        label: 'Confirm Password',
        type: 'password',
        value: passwordConfirm,
        onChange: function onChange(evt) {
          return _this2.handleChangeForms('passwordConfirm', evt.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), _react2.default.createElement(_semanticUiReact.Divider, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { onClick: function onClick(evt) {
          return _this2.handleSignUpButton(evt);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'Sign Up'), _react2.default.createElement(_link2.default, { href: '/signin', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Already a member? Sign in here!')));
    }
  }]);

  return SignUp;
}(_react2.default.Component);

exports.default = SignUp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NpZ251cC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlBhZ2UiLCJMaW5rIiwiRm9ybSIsIkJ1dHRvbiIsIkRpdmlkZXIiLCJIZWFkZXIiLCJTaWduVXAiLCJwcm9wcyIsInN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsInBhc3N3b3JkQ29uZmlybSIsInRhcmdldCIsInZhbHVlIiwib2JqIiwic2V0U3RhdGUiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNoYW5nZUZvcm1zIiwiaGFuZGxlU2lnblVwQnV0dG9uIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTzs7OztBQUNQLEFBQVMsQUFBTSxBQUFRLEFBQVM7Ozs7Ozs7SSxBQUVYO2tDQUNuQjs7a0JBQUEsQUFBYSxPQUFPO3dDQUFBOztzSUFBQSxBQUNaLEFBRU47O1VBQUEsQUFBSzthQUFRLEFBQ0osQUFDUDtnQkFGVyxBQUVELEFBQ1Y7dUJBTmdCLEFBR2xCLEFBQWEsQUFHTTtBQUhOLEFBQ1g7V0FJSDs7Ozs7c0NBRWtCLEEsUSxBQUFRLE9BQU8sQUFDaEM7VUFBTSxNQUFOLEFBQVksQUFDWjtVQUFBLEFBQUksVUFBSixBQUFjLEFBQ2Q7V0FBQSxBQUFLLFNBQUwsQUFBYyxBQUNmOzs7O3VDQUVtQixBLEtBQUssQUFDdkI7VUFBQSxBQUFJLEFBQ0w7Ozs7NkJBRVM7bUJBQUE7O21CQUNxQyxLQURyQyxBQUMwQztVQUQxQyxBQUNBLGVBREEsQUFDQTtVQURBLEFBQ08sa0JBRFAsQUFDTztVQURQLEFBQ2lCLHlCQURqQixBQUNpQixBQUN6Qjs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsNEJBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsdUNBQ0UsQUFBQyxzQkFBRCxBQUFNO2VBQU4sQUFDUSxBQUNOO2NBRkYsQUFFTyxBQUNMO2VBSEYsQUFHUyxBQUNQO2tCQUFVLGtCQUFBLEFBQUMsS0FBRDtpQkFBUyxPQUFBLEFBQUssa0JBQUwsQUFBdUIsU0FBUyxJQUFBLEFBQUksT0FBN0MsQUFBUyxBQUEyQztBQUpoRTs7b0JBQUE7c0JBREYsQUFDRSxBQU1BO0FBTkE7QUFDRSx3Q0FLRixBQUFDLHNCQUFELEFBQU07ZUFBTixBQUNRLEFBQ047Y0FGRixBQUVPLEFBQ0w7ZUFIRixBQUdTLEFBQ1A7a0JBQVUsa0JBQUEsQUFBQyxLQUFEO2lCQUFTLE9BQUEsQUFBSyxrQkFBTCxBQUF1QixZQUFZLElBQUEsQUFBSSxPQUFoRCxBQUFTLEFBQThDO0FBSm5FOztvQkFBQTtzQkFQRixBQU9FLEFBTUE7QUFOQTtBQUNFLHdDQUtGLEFBQUMsc0JBQUQsQUFBTTtlQUFOLEFBQ1EsQUFDTjtjQUZGLEFBRU8sQUFDTDtlQUhGLEFBR1MsQUFDUDtrQkFBVSxrQkFBQSxBQUFDLEtBQUQ7aUJBQVMsT0FBQSxBQUFLLGtCQUFMLEFBQXVCLG1CQUFtQixJQUFBLEFBQUksT0FBdkQsQUFBUyxBQUFxRDtBQUoxRTs7b0JBQUE7c0JBYkYsQUFhRSxBQU1BO0FBTkE7QUFDRSwwQkFLRixBQUFDOztvQkFBRDtzQkFuQkYsQUFtQkUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQyx5Q0FBTyxTQUFTLGlCQUFBLEFBQUMsS0FBRDtpQkFBUyxPQUFBLEFBQUssbUJBQWQsQUFBUyxBQUF3QjtBQUFsRDtvQkFBQTtzQkFBQTtBQUFBO1NBcEJGLEFBb0JFLEFBQ0EsNEJBQUEsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBQUE7QUFBQTtTQXhCTixBQUNFLEFBRUUsQUFxQkUsQUFJUDs7Ozs7RUFuRGlDLGdCQUFNLEE7O2tCQUFyQixBIiwiZmlsZSI6InNpZ251cC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanVsaWFyaWNrZXR0aS9Xb3Jrc3BhY2UvY2J0In0=