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
    const { response } = (0, _syncanoServer2.default)(ctx);
    const { user, token, instance } = ctx.meta;
    if (!user) {
      throw new Error('Please log in');
    }
    const AUTH_URL = function (id) {
      return `https://api.syncano.io/v2/instances/${instance}/users/${id}/reset_key/`;
    };
    console.log(user);
    try {
      const resp = yield (0, _axios2.default)({
        url: AUTH_URL(user.id),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': token
        }
      });
      return response.json({
        token: resp.data.user_key
      });
    } catch (error) {
      return response.json({
        message: 'Token is invalid'
      }, 403);
    }
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})();