"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = require("react-dom/client");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// const App = () => <h1>Hello Andrey</h1>;

var root = (0, _client.createRoot)(document.getElementById('root'));
root.render( /*#__PURE__*/_react["default"].createElement("h1", null, "Hello Andrey"));