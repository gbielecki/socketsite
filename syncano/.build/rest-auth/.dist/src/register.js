'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('./helpers');

var _syncanoServer = require('syncano-server');

var _syncanoServer2 = _interopRequireDefault(_syncanoServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global ARGS */
exports.default = ctx => {
  const { data, users, socket, response, event, logger, instance } = (0, _syncanoServer2.default)(ctx);
  const { username, password } = ctx.args;
  register();
  function register() {
    if ((0, _helpers.isEmail)(username)) {
      users.where('username', 'eq', username).firstOrFail().then(respondWithUserAlreadyExists).catch(createUser);
    } else {
      return respondWithInvalidEmail();
    }

    function createUser() {
      const user = {
        username,
        password
      };

      users.create(user).then(respondWithUser).catch(respondWithError);
    }

    function respondWithUser(res) {
      return response.json({
        id: res.id,
        token: res.user_key,
        username: res.username
      });
    }

    function respondWithError({ response: err }) {
      err.json().then(data => response.json(data, 400));
    }

    function respondWithUserAlreadyExists() {
      return response.json({ username: 'User already exists.' }, 400);
    }

    function respondWithInvalidEmail() {
      return response.json({ username: 'Given email is invalid.' }, 400);
    }
  }
};