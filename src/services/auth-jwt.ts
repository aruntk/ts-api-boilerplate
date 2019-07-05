import * as express from 'express'
import passport from 'passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
// import { userList } from '../users'
import { jwtSecret, jwtSession } from '../config/jwt'

const params = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret,
}

export default () => {
  const strategy = new Strategy(params, (payload, done) => {
    return done(null, payload)
  })
  passport.use(strategy)
  return {
    initialize() {
      return passport.initialize()
    },
    authenticate() {
      const nextFn = (req: express.Request, reject: Function, resolve: Function) => {
        const res = () => {}
        res.end = () => reject(new Error('401 - Access Denied.!'))
        res.status = () => {}
        return passport.authenticate('jwt', jwtSession)(req, res, resolve)
      }
      return nextFn
    },
  }
}
