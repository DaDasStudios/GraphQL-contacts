import Contact from "../models/Contact"

export const root = {
    async users() {
        return await Contact.find()
    },

    async createContact({ input }) {
        const { name, nickname, phone } = input
        const newContact = new Contact({ name, nickname, phone })
        await newContact.save()
        return newContact
    },

    async deleteContact({ id }) {
        return await Contact.findByIdAndDelete(id)
    },

    async updateContact({ id, input }) {
        return await Contact.findByIdAndUpdate(id, input, { new: true })
    }
}