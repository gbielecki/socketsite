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
    const { username, password } = ctx.args;
    const AUTH_URL = `https://api.syncano.io/v2/instances/${ctx.meta.instance}/users/auth/`;
    try {
      const resp = yield (0, _axios2.default)({
        url: AUTH_URL,
        method: 'POST',
        data: { username, password },
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': ctx.meta.token
        }
      });
      return response.json({
        username: resp.data.username,
        token: resp.data.user_key
      });
    } catch (error) {
      return respondWithInvalidCredentials();
    }
    function respondWithInvalidCredentials() {
      return response.json({ message: 'Given credentials are invalid.' }, 400);
    }
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})();