import Syncano from 'syncano-server'

export default (ctx) => {
  const {response,data,users} = Syncano(ctx)

  if (ctx.args.socketName && ctx.args.socketDescription && ctx.args.token) {
    console.log(ctx.args.token);
    try{
        const { user } = ctx.meta
        console.log(user);
          data.socket.create({
          name: ctx.args.socketName, 
          description: ctx.args.socketDescription, 
          author: user.username})
      .then(()=> {
          return data.socket.list()
      })
      .then(socketList => {
            response.json(socketList)
          })
    }
    catch({message}) {
        return response.json({"cipak": 123}, 400)
      }
    
  } else if(ctx.args.socketName && ctx.args.socketDescription){
    response.json({
        message: 'Autentykacja nie dziala?!',
        wiecejWiadomosc: ctx.meta
      }, 400)
  } else {
    response.json({
      message: 'You have to send "socketName" and "socketDescription" arguments!'
    }, 400)
  }
}
