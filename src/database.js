import mongoose from 'mongoose'
import { DBPASS, DBUSER, DBURI } from './config'

mongoose.set('strictQuery', true)

export default async function connect() {
    await mongoose.connect(DBURI, {
        pass: DBPASS,
        user: DBUSER,
        dbName: "graphql",
    })
    console.log(">>> DB connected!")
}


