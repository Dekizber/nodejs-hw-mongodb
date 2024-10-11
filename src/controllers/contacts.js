import * as contactServices from '../services/contacts.js';

export const getContactsController = async (req, res) => {
    try {
        const data = await contactServices.getContacts();

        res.json({
            status: 200,
            message: "Successfully found contacts!",
            data,
        });
    } catch (error) {

    }

};

export const getContactByIdController = async (req, res) => {
    const { contactId } = req.params;
    const data = await contactServices.getContactById(contactId);

    if (!data) {
        return res.status(404).json({
            status: 404,
            message: `Contact not found`
        });
    }

    res.json({
        status: 200,
        message: `Successfully found contact with id ${contactId}!`,
        data,
    });
};
