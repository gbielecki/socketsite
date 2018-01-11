import Syncano from 'syncano-server';
// import fetch from 'axios';
import SyncanoClient from 'syncano-client';

export default (ctx) => {
  const {response, users} = Syncano(ctx)

  if (ctx.args.username && ctx.args.password) {
    console.log('in method');
    const s = new SyncanoClient('falling-wildflower-6623')
    const username = ctx.args.username;
    const password = ctx.args.password;
    const url = `https://api.syncano.io/v2/instances/falling-wildflower-6623/users/auth/`
    const data = JSON.stringify({username,password});
    const user = users.where('password',username);

      console.log(user);
      return user;
    s.login(username, password)
  .then(user => console.log(`Hello ${user.first_name}`))
  .catch(err => console.log('Invalid username or password.'))
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
    }, 400)
  }
}
