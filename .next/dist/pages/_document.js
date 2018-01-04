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

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _server = require('styled-jsx/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/juliaricketti/Workspace/cbt/pages/_document.js?entry';


var _class = function (_Document) {
  (0, _inherits3.default)(_class, _Document);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', { className: 'no-js', lang: 'en', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), _react2.default.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, 'CBT'), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), _react2.default.createElement('link', { href: '/static/favicon.png', rel: 'icon shortcut', type: 'image/png', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Quattrocento+Sans:400,700|Quattrocento:400,700', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/semantic/dist/semantic.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/styles.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), _react2.default.createElement('script', {
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML: { __html: ['document.documentElement.classList.remove("no-js")'].join('\n') },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      })), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var _renderPage = renderPage(),
          html = _renderPage.html,
          head = _renderPage.head,
          errorHtml = _renderPage.errorHtml,
          chunks = _renderPage.chunks;

      var styles = (0, _server2.default)();
      return { html: html, head: head, errorHtml: errorHtml, chunks: chunks, styles: styles };
    }
  }]);

  return _class;
}(_document2.default);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJEb2N1bWVudCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsImZsdXNoIiwiX19odG1sIiwiam9pbiIsInJlbmRlclBhZ2UiLCJodG1sIiwiaGVhZCIsImVycm9ySHRtbCIsImNodW5rcyIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZLEFBQU0sQUFBTTs7OztBQUMvQixBQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFTSyxBQUNSOzZCQUNFLGNBQUEsVUFBTSxXQUFOLEFBQWdCLFNBQVEsTUFBeEIsQUFBNkI7b0JBQTdCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLGlEQUNRLFNBQU4sQUFBYztvQkFBZDtzQkFERixBQUNFLEFBQ0E7QUFEQTtrREFDTSxXQUFOLEFBQWdCLG1CQUFrQixTQUFsQyxBQUEwQztvQkFBMUM7c0JBRkYsQUFFRSxBQUNBO0FBREE7MEJBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSEYsQUFHRSxBQUNBLGdEQUFNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCO29CQUE5QjtzQkFKRixBQUlFLEFBRUE7QUFGQTtrREFFTSxNQUFOLEFBQVcsdUJBQXNCLEtBQWpDLEFBQXFDLGlCQUFnQixNQUFyRCxBQUEwRDtvQkFBMUQ7c0JBTkYsQUFNRSxBQUNBO0FBREE7a0RBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEIsWUFBVyxNQUF2QyxBQUE0QztvQkFBNUM7c0JBUEYsQUFPRSxBQUNBO0FBREE7a0RBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7b0JBQTVCO3NCQVJGLEFBUUUsQUFDQTtBQURBO2tEQUNNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO29CQUE1QjtzQkFURixBQVNFLEFBQ0E7QUFEQTs7QUFHRTtpQ0FBeUIsRUFBRSxRQUFRLENBQUEsQUFDakMsc0RBRGlDLEFBRWpDLEtBSkosQUFFMkIsQUFBVSxBQUU1Qjs7b0JBSlQ7c0JBWEosQUFDRSxBQVVFLEFBT0Y7QUFQRTtBQUNFLDJCQU1KLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7O29CQUFEO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQzs7b0JBQUQ7c0JBckJOLEFBQ0UsQUFrQkUsQUFFRSxBQUlQO0FBSk87QUFBQTs7OzswQ0E1QmdDO1VBQWQsQUFBYyxrQkFBZCxBQUFjOzt3QkFBQSxBQUNJO1VBREosQUFDOUIsbUJBRDhCLEFBQzlCO1VBRDhCLEFBQ3hCLG1CQUR3QixBQUN4QjtVQUR3QixBQUNsQix3QkFEa0IsQUFDbEI7VUFEa0IsQUFDUCxxQkFETyxBQUNQLEFBQy9COztVQUFNLFNBQU4sQUFBZSxBQUNmO2FBQU8sRUFBRSxNQUFGLE1BQVEsTUFBUixNQUFjLFdBQWQsV0FBeUIsUUFBekIsUUFBaUMsUUFBeEMsQUFBTyxBQUNSOzs7OztBQUwwQixBIiwiZmlsZSI6Il9kb2N1bWVudC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanVsaWFyaWNrZXR0aS9Xb3Jrc3BhY2UvY2J0In0=