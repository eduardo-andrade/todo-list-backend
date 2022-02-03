const app =require('../../../index');
const UserRepository = require('../../repository/UserRepository')
const { generateHash, decrypt} = require('../../helpers/crypt');

describe("Unity test User repository", () => {
    afterAll(() => {
        app.close();
    });

    it("should create a new user", async () => {
        const expected = [
            "id",
            "name",
            "email",
            "password",
            "updatedAt",
            "createdAt",
        ];

        const userCreated = await UserRepository.create(
            "Luiz Eduardo Andrade",
            "luiztest@gmail.com",
            "123456789"
        );

        if (userCreated.message) {
            return expect(userCreated.message).toEqual("User already exists");
        }

        expect(Object.keys(userCreated)).toEqual(expected);
    });
})