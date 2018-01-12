'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _syncanoServer = require('syncano-server');

var _syncanoServer2 = _interopRequireDefault(_syncanoServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /* global META, ARGS */


exports.default = (() => {
  var _ref = _asyncToGenerator(function* (ctx) {
    const { data, users, socket, response, event, logger, instance } = (0, _syncanoServer2.default)(ctx);
    const { username, token } = ctx.args;
    try {
      const u = yield users.where('username', username).firstOrFail();
      if (u.user_key !== token) {
        return response.json({
          valid: false
        });
      }
      return response.json({
        valid: true
      });
    } catch (error) {
      return response.json(error);
    }
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})();