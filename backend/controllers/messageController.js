// controllers/messageController.js
const Message = require('../models/Message');

const sendMessage = async (req, res) => {
    const { expediteur_id, destinataire_id, content } = req.body;

    try {
        const message = await Message.create({
            expediteur_id,
            destinataire_id,
            content,
        });

        res.status(201).json(message);
    } catch (error) {
        console.error('Erreur lors de l\'envoi du message:', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

const getMessages = async (req, res) => {
    const { userId } = req.params;

    try {
        const messages = await Message.findAll({
            where: {
                [Op.or]: [
                    { expediteur_id: userId },
                    { destinataire_id: userId },
                ],
            },
        });

        res.status(200).json(messages);
    } catch (error) {
        console.error('Erreur lors de la récupération des messages:', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

const markAsRead = async (req, res) => {
    const { id } = req.params;

    try {
        const message = await Message.findByPk(id);

        if (!message) {
            return res.status(404).json({ message: 'Message non trouvé' });
        }

        message.lu = true;
        await message.save();

        res.status(200).json({ message: 'Message marqué comme lu' });
    } catch (error) {
        console.error('Erreur lors de la mise à jour du message:', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

module.exports = { sendMessage, getMessages, markAsRead };