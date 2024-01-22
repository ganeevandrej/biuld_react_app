import "core-js/modules/es.array.flat.js";
import "core-js/modules/es.array.unscopables.flat.js";
import React from 'react';
import { createRoot } from 'react-dom/client';
const App = () => {
  console.log([1, 2, [3, 4]].flat());
  return /*#__PURE__*/React.createElement("h1", null, "Hello Andrey");
};
const root = createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(App, null));