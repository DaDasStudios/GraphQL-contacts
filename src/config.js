import { config } from 'dotenv'
config()

export const PORT = process.env.PORT
export const DBPASS = process.env.DBPASS
export const DBUSER = process.env.DBUSER
export const DBURI = process.env.DBURI