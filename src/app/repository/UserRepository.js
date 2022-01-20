const User = require("../model/User");
const {generateHash} = require("../helpers/crypt");
const {ErrorHandler} = require("../helpers/error");

class UserRespository{
    async create(name, email, password){
        try{
            if(
                name == "" || 
                email == "" || 
                password == "" || 
                name == null || 
                email == null || 
                password == null
            ){
                throw new ErrorHandler(400, "Fill in all fields");
            }

            const userExits = await User.findOnde({
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