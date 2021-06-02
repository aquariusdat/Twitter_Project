class UserController {
    getUser(req, res) {
        res.send({ id: 1, name: 'Hua Ton Dat' });
    }

    postUser(req, res) {
        const { id, name } = req.body;
        console.log(`ID: ${id}, Name: ${name}`);

        res.status(200).json({
            id: id,
            name: name,
        });
    }
}

module.exports = new UserController();