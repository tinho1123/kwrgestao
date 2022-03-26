const KwrData = require('../models/KwrUsersData');


async function get(_req, res) {
    const usersList = await KwrData.find();

    return res.status(200).json(usersList);
}

async function create({ body: { email, senha, admPriority } }, res) {

    if (!email) {
        return res.status(400).json({ error: "Necessário inserir seu email!"})
    }

    if (!senha) {
        return res.status(400).json({ error: "Necessário inserir sua senha!"})
    }
    

    const createUser = await KwrData.create({
        email,
        senha,
        admPriority
    });

    return res.status(200).json(createUser)
}



module.exports = {
    get,
    create,
}