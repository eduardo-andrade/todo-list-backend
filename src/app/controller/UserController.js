const repository = require("../repository.UserRepository");

class UserController {
    async index(req, res) {
        const users = await repository.getAll();

        return res.json(users);
    }

    async create(req, res) {
        try {
            let statusCode;

            const users = await repository.create(
                req.body.name,
                req.body.email,
                req.body.password
            );

            statusCode = users.statusCode;

            return statusCode === 400 ? res.status(400).json(users) : res.json(users);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}