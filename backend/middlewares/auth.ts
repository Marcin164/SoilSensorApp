import jwt from 'jsonwebtoken'
import JwtExpired from 'jwt-check-expiration'

const auth = (req:any, res:any, next:any) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token === null) return res.status(401)

  if (JwtExpired.isJwtExpired(token)) return res.status(401).send('EXPIRED')

  try {
    jwt.verify(token, process.env.ACCESS, (err, user) => {
      if (err) throw err

      req.user = user
      next()
    })
  } catch (error) {
    console.log('error')
    console.log(error)
  }
}

export default auth
