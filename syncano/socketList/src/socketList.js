import Syncano from '@syncano/core'

export default (ctx) => {
  const {response,data} =  new Syncano(ctx)
  
     data.socket.list()
    .then(socketList => {
          response.json(socketList)
        })
}
