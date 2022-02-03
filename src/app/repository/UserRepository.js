const User = require("../model/User");
const {generateHash} = require("../helpers/crypt");
const {ErrorHandler} = require("../helpers/error");

class UserRepository{
    async create(name, email, password){
        try{

            const userExists = await User.findOne({
                where: { 
                    email,
                },
            });
            
            if (userExists) {
                throw new ErrorHandler(400, "User already exists");
            }

            const passwordHash = generateHash(password);

            const user = (
                await User.create({
                    name,
                    email,
                    password: passwordHash,
                })
            ).get({
                plain: true,
            });
            
            return user;
        }catch (error) {
            return error;
        }
    }
}

module.exports = new UserRepository();