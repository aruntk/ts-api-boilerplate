import chalk from 'chalk'
import { Linter, Configuration } from 'tslint'
import * as fs from 'fs'
import { log } from '../utils/log'

export const checkLinting = async (fileName: string) => {
  log(chalk.green('Checking for lint error...'))
  const configurationFilename = './tslint.json'
  const options = {
    fix: false,
    formatter: 'codeFrame'
  }
  const fileContents = fs.readFileSync(fileName, 'utf8')
  const linter = new Linter(options)
  const configuration = Configuration.findConfiguration(configurationFilename, fileName).results
  linter.lint(fileName, fileContents, configuration)
  const result = linter.getResult()
  if (result.errorCount) {
    const err = `${result.errorCount} Linting Error${result.errorCount > 1 ? 's' : ''} Found\n`
    log(chalk.redBright(err))
    log(result.output)
    throw new Error(err)
  }
}
