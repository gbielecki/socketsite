import Syncano from 'syncano-server'

export default (ctx) => {
  const {response, users} = Syncano(ctx)

  if (ctx.args.firstName && ctx.args.lastName && ctx.args.email && ctx.args.password) {
    users.create({username: ctx.args.email, password: ctx.args.password})
    .then(response.json({
        message: `Hello ${ctx.args.firstName} ${ctx.args.lastName}!`
    }))
  } else {
    response.json({
      message: 'You have to send all arguments to create user!'
    }, 400)
  }
}
