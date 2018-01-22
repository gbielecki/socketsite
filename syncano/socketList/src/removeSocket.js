import Syncano from 'syncano-server'

export default (ctx) => {
  const {response,data} =  new Syncano(ctx)

  if (ctx.args.socketId) {
    data.socket.delete(ctx.args.socketId)
    .then(() =>{
        return data.socket.list();
    })
    .then(socketList => {
        response.json(socketList)
    })
  } else {
      response.json({
        message: 'You have to send "socketName" and "socketDescription" arguments!'
    })
    }
}
