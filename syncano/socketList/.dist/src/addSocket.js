'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _syncanoServer = require('syncano-server');

var _syncanoServer2 = _interopRequireDefault(_syncanoServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ctx => {
  const { data, response } = (0, _syncanoServer2.default)(ctx);

  if (ctx.args.socketName && ctx.args.socketDescription) {
    data.socket.create({
      name: ctx.args.socketName,
      description: ctx.args.socketDescription,
      author: 'hardcodedVal'
    }).then(() => {
      return data.socket.list();
    }).then(sockets => {
      response.json(sockets);
    });
  } else {
    response.json({
      message: 'You have to send "socketName" and "socketDescription" arguments!'
    }, 400);
  }
};