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
    console.log('in method');
    const s = new _syncanoClient2.default('falling-wildflower-6623');
    const username = ctx.args.username;
    const password = ctx.args.password;
    const url = `https://api.syncano.io/v2/instances/falling-wildflower-6623/users/auth/`;
    const data = JSON.stringify({ username, password });
    const user = users.where('password', username);

    console.log(user);
    return user;
    s.login(username, password).then(user => console.log(`Hello ${user.first_name}`)).catch(err => console.log('Invalid username or password.'));
    // .then(user=>{
    //   console.log(user);
    //   this.setToken(user.Token);
    //   return user;
    // })
    // response.json({
    //   message: `Hello ${ctx.args.username} ${ctx.args.password}!`
    // })
  } else {
    response.json({
      message: 'You have to send "firstname" and "lastname" arguments!'
    }, 400);
  }
};
// import fetch from 'axios';