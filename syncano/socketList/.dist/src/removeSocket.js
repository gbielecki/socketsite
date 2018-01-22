'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _syncanoServer = require('syncano-server');

var _syncanoServer2 = _interopRequireDefault(_syncanoServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ctx => {
    const { response, data } = new _syncanoServer2.default(ctx);

    if (ctx.args.socketId) {
        data.socket.delete(ctx.args.socketId).then(() => {
            return data.socket.list();
        }).then(socketList => {
            response.json(socketList);
        });
    } else {
        response.json({
            message: 'You have to send "socketName" and "socketDescription" arguments!'
        });
    }
};