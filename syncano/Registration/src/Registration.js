import Syncano from 'syncano-server'

export default (ctx) => {
  const {response} = Syncano(ctx)

  if (ctx.args.firstName && ctx.args.lastName && ctx.args.email && ctx.args.password) {
    response.json({
      message: `Hello ${ctx.args.firstName} ${ctx.args.lastName}!`
    })
  } else {
    response.json({
      message: 'You have to send "firstname" and "lastname" arguments!'
    }, 400)
  }
}
