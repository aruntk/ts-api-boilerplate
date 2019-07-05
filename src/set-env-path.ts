import { config } from 'dotenv'
import { log } from './utils/log'
import * as path from 'path'

const envFilePath = process.env.ENV_FILE_PATH || '.env.development'
log('envFilePath', envFilePath)

config({ path: path.resolve(process.cwd(), envFilePath) })
