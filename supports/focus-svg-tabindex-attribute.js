'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _svg = require('./helper/svg');

exports.default = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML = (0, _svg.generate)('<text tabindex="0">a</text>');
    return element.querySelector('text');
  },
  validate: _svg.validate
};
module.exports = exports['default'];
//# sourceMappingURL=focus-svg-tabindex-attribute.js.map