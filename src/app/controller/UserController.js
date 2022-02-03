const repository = require("../repository/UserRepository");

class UserController {
    async index(req, res) {
        const users = await repository.getAll();

        return res.json(users);
    }

    async create(req, res) {
        try {
            let statusCode;

            const fields = ['name', 'email', 'password'];

            for(const field of fields) {
                if(!req.body[field]){
                    return res.status(400).json("Fill in all fillds")
                }
            }

            const users = await repository.create(
                req.body.name,
                req.body.email,
                req.body.password
            );
            console.log(users);
            statusCode = users.statusCode;

            return statusCode === 400 ? res.status(400).json(users) : res.json(users);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}
module.exports = new UserController()