import Syncano from 'syncano-server'

export default (ctx) => {
  const {response,data} = Syncano(ctx)
  
     data.socket.list()
    .then(socketList => {
          response.json(socketList)
        })
}
