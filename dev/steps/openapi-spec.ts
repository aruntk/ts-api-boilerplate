import chalk from 'chalk'
import { generateSwaggerSpec } from 'tsoa'
import { log } from '../utils/log'
import { Timer } from '../utils/timer'

/**
 * Generates Open API/Swagger specification file
 */
export const generateOpenAPISpec = async () => {
  const timer = new Timer()
  await generateSwaggerSpec({
    basePath: '/src',
    entryFile: './src/server.ts',
    outputDirectory: './src/dist',
  })

  log(chalk.greenBright(`✓ Generated OpenAPI spec (${timer.elapsed()}ms)`))
}
