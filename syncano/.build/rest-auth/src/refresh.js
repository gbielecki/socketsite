/* global META, ARGS */
import fetch from 'axios'
import Server from 'syncano-server'
export default async ctx => {
  const {response} = Server(ctx)
  const {user, token, instance} = ctx.meta
  if (!user) {
    throw new Error('Please log in')
  }
  const AUTH_URL = id =>
    `https://api.syncano.io/v2/instances/${instance}/users/${id}/reset_key/`
  console.log(user)
  try {
    const resp = await fetch({
      url: AUTH_URL(user.id),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': token
      }
    })
    return response.json({
      token: resp.data.user_key
    })
  } catch (error) {
    return response.json(
      {
        message: 'Token is invalid'
      },
      403
    )
  }
}
