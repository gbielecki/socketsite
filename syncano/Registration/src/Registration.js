import Syncano from '@syncano/core'

export default (ctx) => {
  const {response, users} = new Syncano(ctx)

  if (ctx.args.firstName && ctx.args.lastName && ctx.args.email && ctx.args.password) {
    users.create({username: ctx.args.email, password: ctx.args.password})
    .then(response.json({
        message: `Hello ${ctx.args.firstName} ${ctx.args.lastName}!`
    }),200)
  } else {
    response.json({
      message: 'You have to send all arguments to create user!'
    }, 400)
  }
}