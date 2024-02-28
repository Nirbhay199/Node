const crypto = require("crypto");
const jwt = require("jsonwebtoken");
module.exports = class Auth {
  static encryptPassword(password) {
    let cipher = crypto.createCipher("aes256", "09f26e402586e2faa8da4c98a35f");
    let encryptedPassword = cipher.update(password, "utf8", "hex");
    encryptedPassword += cipher.final("hex");
    return encryptedPassword;
  }
  static decryptPassword(password, userPassword) {
    const decipher = crypto.createDecipher(
      "aes256",
      "09f26e402586e2faa8da4c98a35f"
    );
    let decryptPassword = decipher.update(password, "hex", "utf8");
    decryptPassword += decipher.final("utf8");
    console.log(decryptPassword);
    return decryptPassword == userPassword;
  }

  static token(data) {
    return jwt.sign(
      {
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password,
      },
      process.env.jsonKey
    );
  }
};
