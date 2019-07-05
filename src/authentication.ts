import * as express from 'express'
import authJwt from './services/auth-jwt'
const auth = authJwt()

// tslint:disable-next-line:completed-docs
export function expressAuthentication(request: express.Request, securityName: string = 'jwt', scopes: string[] = []): Promise<any> {
  if (securityName === 'jwt') {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:ter-prefer-arrow-callback
      auth.authenticate()(request, reject, function () {
        // Check if JWT contains all required scopes
        for (const scope of scopes) {
          if (!request.user.scopes.includes(scope)) {
            reject(new Error('JWT does not contain required scope.'))
          }
        }
        resolve(request.user)
      })
    })
  }
  if (securityName === 'api_token') {
    let token
    if (request.query && request.query.access_token) {
      token = request.query.access_token
    }

    if (token === process.env.TEST_API_TOKEN) {
      return Promise.resolve({
        id: 1,
        name: 'bruce wayne'
      })
    }
    return Promise.reject({})
  } 
  return Promise.reject({})
}
