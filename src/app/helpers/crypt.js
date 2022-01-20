const bcrypt = require("bcryptjs");

const generateHash = (str) => {
    try{
        const salt = bcrypt.genSaltSync(10);

        const hash = bcrypt.hashSync(str, salt);

        return hash;
    } catch (error) {
        return error;
    }
};

/* const decrypt = (str, hashedStr) => {
    try {
        const hashDecrypt = bcrypt.compareSync(str, hashedStr);
    }
} */

module.exports = { generateHash };