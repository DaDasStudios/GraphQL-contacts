import { buildSchema } from 'graphql'

export default buildSchema(`
    type Query {
        users: [Contact]
    }

    type Mutation {
        createContact(input: InputCreateContact): Contact
        deleteContact(id: ID): Contact
        updateContact(id: ID, input: InputUpdateContact): Contact
    } 

    input InputUpdateContact {
        name: String
        nickname: String
        phone: String
    }

    input InputCreateContact {
        name: String!
        nickname: String
        phone: String!
    }

    type Contact {
        _id: ID
        name: String!
        nickname: String
        phone: String!
    }
`)