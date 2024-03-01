const crypto = require('crypto')
module.exports = class Functions {
    static encryptPassword(password) {
        let cipher = crypto.createCipher("aes256", process.env.passwordkey);
        let encryptedPassword = cipher.update(password, "utf8", "hex");
        encryptedPassword += cipher.final("hex");
        return encryptedPassword;
    }
    static decryptPassword(password, userPassword) {
        const decipher = crypto.createDecipher(
            "aes256",
            process.env.passwordkey
        );
        let decryptPassword = decipher.update(password, "hex", "utf8");
        decryptPassword += decipher.final("utf8");
        console.log(decryptPassword);
        return decryptPassword == userPassword;
    }
}