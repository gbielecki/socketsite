'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require('@syncano/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ctx => {
  const { response, data } = new _core2.default(ctx);

  data.socket.list().then(socketList => {
    response.json(socketList);
  });
};