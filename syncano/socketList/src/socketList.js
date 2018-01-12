import Syncano from 'syncano-server'

export default (ctx) => {
  const {response,data} = Syncano(ctx)
  
     data.socket.fields('name','description','author').list()
    .then(socketList => {
          response.json(socketList)
        })
}
