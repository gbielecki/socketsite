import Syncano from 'syncano-server'

export default (ctx) => {
  const {response, users} = Syncano(ctx)

  if (ctx.args.username && ctx.args.password) {
    response.json({
      message: `Hello ${ctx.args.username} ${ctx.args.password}!`
    })
  } else {
    response.json({
      message: 'You have to send "firstname" and "lastname" arguments!'
    }, 400)
  }
}
