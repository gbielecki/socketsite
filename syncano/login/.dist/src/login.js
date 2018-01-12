'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _syncanoServer = require('syncano-server');

var _syncanoServer2 = _interopRequireDefault(_syncanoServer);

var _syncanoClient = require('syncano-client');

var _syncanoClient2 = _interopRequireDefault(_syncanoClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ctx => {
  const { response, users } = (0, _syncanoServer2.default)(ctx);

  if (ctx.args.username && ctx.args.password) {
    const s = new _syncanoClient2.default('falling-wildflower-6623');
    const username = ctx.args.username;
    const password = ctx.args.password;
  } else {
    response.json({
      message: 'You have to send "firstname" and "lastname" arguments!'
    }, 400);
  }
};
// import fetch from 'axios';