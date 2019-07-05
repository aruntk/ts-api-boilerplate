import { log } from './log'

const alertMissingEnvVar = (varArr: string[], mode: string = 'error') => {
  varArr.forEach((v) => {
    if (!process.env[v]) {
      const errorMsg = `Missing environment variable -> ${v}`
      switch (mode) {
        case 'error':
          throw new Error(errorMsg)
          break
        case 'warn':
          log(errorMsg)
          break
        default:
          log(errorMsg)
          break
      }
    }
  })
}

export default alertMissingEnvVar
