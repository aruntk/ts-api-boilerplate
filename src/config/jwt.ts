import alertMissingEnvVar from '../utils/alert-missing-env-var'

alertMissingEnvVar(['JWT_SECRET'], 'error')
// tslint:disable-next-line max-line-length
const defaultJwtSecret = Math.random().toString(36).substring(7) + Math.random().toString(36).substring(7)
export const jwtSecret = process.env.JWT_SECRET || defaultJwtSecret
export const jwtSession = {
  session: false,
}
export const saltRounds = process.env.JWT_SALT_ROUNDS || 12
export const expiresIn = process.env.JWT_EXPIRES_IN || '8h'
export const notBefore = process.env.JWT_NOT_BEFORE || '8h'
