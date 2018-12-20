"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactVirtualized = require("react-virtualized");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SectionList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SectionList, _React$Component);

  function SectionList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SectionList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SectionList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "flattenList", function (sections) {
      var list = sections.reduce(function (acc, el) {
        var section = el.section;
        acc.push({
          data: section,
          isHeader: true,
          index: acc.length
        });
        el.data.forEach(function (item) {
          acc.push({
            data: item,
            isHeader: false,
            index: acc.length
          });
        });
        return acc;
      }, []);
      return list;
    });

    return _this;
  }

  _createClass(SectionList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var list = this.flattenList(this.props.list);
      return _react.default.createElement(_reactVirtualized.List, {
        width: this.props.width,
        height: this.props.height,
        rowCount: list.length,
        rowRenderer: function rowRenderer(props) {
          var item = list[props.index];
          var renderer = item.isHeader ? _this2.props.renderSection : _this2.props.renderRow;
          return renderer(_objectSpread({}, props, {
            item: item.data
          }));
        },
        rowHeight: function rowHeight(props) {
          var item = list[props.index];
          return item.isHeader ? _this2.props.sectionHeight : _this2.props.rowHeight;
        }
      });
    }
  }]);

  return SectionList;
}(_react.default.Component);

_defineProperty(SectionList, "propTypes", {
  list: _propTypes.default.array.isRequired,
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired,
  renderRow: _propTypes.default.func.isRequired,
  rowHeight: _propTypes.default.number.isRequired,
  renderSection: _propTypes.default.func.isRequired,
  sectionHeight: _propTypes.default.number.isRequired
});

var _default = SectionList;
exports.default = _default;
