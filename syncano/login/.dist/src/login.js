'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require('@syncano/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ctx => {
  const { response, users } = new _core2.default(ctx);

  if (ctx.args.username && ctx.args.password) {
    const username = ctx.args.username;
    const password = ctx.args.password;
  } else {
    response.json({
      message: 'You have to send "firstname" and "lastname" arguments!'
    }, 400);
  }
};