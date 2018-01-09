'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _syncanoServer = require('syncano-server');

var _syncanoServer2 = _interopRequireDefault(_syncanoServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ctx => {
  const { response, users } = (0, _syncanoServer2.default)(ctx);

  if (ctx.args.firstName && ctx.args.lastName && ctx.args.email && ctx.args.password) {
    users.create({ username: ctx.args.email, password: ctx.args.password }).then(response.json({
      message: `Hello ${ctx.args.firstName} ${ctx.args.lastName}!`
    }));
  } else {
    response.json({
      message: 'You have to send all arguments to create user!'
    }, 400);
  }
};