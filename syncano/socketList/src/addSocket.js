import Syncano from 'syncano-server'

export default (ctx) => {
  const {data,response} = Syncano(ctx)

  if (ctx.args.socketName && ctx.args.socketDescription) {
      
    console.log(ctx.meta);
    response.json({user: ctx},200);
    // data.socket.create({
    //     name: ctx.args.socketName, 
    //     description: ctx.args.socketDescription, 
    //     author: 'val'
    //   })
    //   .then(()=> {
    //     return data.socket.list()
    //   })
    //   .then(sockets => {
    //     response.json(sockets)
    //   })
  } else {
    response.json({
      message: 'You have to send "socketName" and "socketDescription" arguments!'
    }, 400)
  }
}
