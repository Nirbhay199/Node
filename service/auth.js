var crypto = require("crypto");
module.exports = class Auth {
  static encryptPassword(password) {
    let cipher = crypto.createCipher("aes256", "09f26e402586e2faa8da4c98a35f");
    let encryptedPassword = cipher.update(password, "utf8", "hex");
    encryptedPassword += cipher.final("hex");
    return encryptedPassword;
  }
  decryptPassword(password, userPassword) {
    if (!userPassword) {
      res.status(422).json({ success: false, message: "Enter Valid Password" });
    }
    const decipher = crypto.createDecipher(
      "aes256",
      "09f26e402586e2faa8da4c98a35f"
    );
    let decryptPassword = decipher.update(password, "hex", "utf8");
    decryptPassword += decipher.final("utf8");
    console.log(decryptPassword);
    return decryptPassword == userPassword;
  }
};
