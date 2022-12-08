import { Schema, model } from 'mongoose'

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: true
    }
})

export default model("contacts", contactSchema)