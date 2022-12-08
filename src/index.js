import express from 'express'
import connect from './database'
import { graphqlHTTP } from 'express-graphql'
import { PORT } from './config'
import schema from './graphql/schema'
import { root } from './graphql/resolvers'

connect()
const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))

app.listen(PORT, () => {
    console.log('Serving in port ', PORT)
})