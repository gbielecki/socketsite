import Syncano from 'syncano-server';
// import fetch from 'axios';
import SyncanoClient from 'syncano-client';

export default (ctx) => {
  const {response, users} = Syncano(ctx)

  if (ctx.args.username && ctx.args.password) {
    const s = new SyncanoClient('falling-wildflower-6623')
    const username = ctx.args.username;
    const password = ctx.args.password;
  } else {
    response.json({
      message: 'You have to send "firstname" and "lastname" arguments!'
    }, 400)
  }
}
