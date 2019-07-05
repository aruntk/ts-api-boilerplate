import * as chokidar from 'chokidar'
import { generateExpressRoutes } from './steps/gen-routes'
import { registerQuitKey } from './steps/register-quit-key'
import { startApi } from './steps/start-api'
import { checkLinting } from './steps/check-linting'
import { debounce } from './utils/debounce'
import { log } from './utils/log'

/**
 * Single to run API server and regenerate route-related content
 */

(async () => {
  // do all checks here
  // try {
  // } catch (err) {
  // log(err)
  // process.exit(1)
  // }

  await Promise.all([
    generateExpressRoutes().then(() => startApi()),
  ])

  const regenerateApiRoutes = debounce(async (args) => {
     log(args)
     const routesChanged =
       args.indexOf('server.ts') !== -1 ||
       args.indexOf('src/controllers') !== -1

     if (routesChanged) {
       await checkLinting(args)
       await Promise.all([generateExpressRoutes()])
     } else {
       await startApi()
     }
   }, 100)

  chokidar.watch('./src/**/*.ts').on('change', regenerateApiRoutes)

  registerQuitKey()
})()
