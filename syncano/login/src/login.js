import Syncano from '@syncano/core'

export default (ctx) => {
  const {response, users} = new  Syncano(ctx)

  if (ctx.args.username && ctx.args.password) {
    const username = ctx.args.username;
    const password = ctx.args.password;
  } else {
    response.json({
      message: 'You have to send "firstname" and "lastname" arguments!'
    }, 400)
  }
}
