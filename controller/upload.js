const admin = require("firebase-admin");
var serviceAccount = require("/Users/610weblab/Documents/Node/serviceAccountKey.json");
const { PassThrough } = require("stream");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "randd-407b6.appspot.com",
});
const bucket = admin.storage().bucket();

module.exports = class Upload {
  static async upload(req, res) {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No files were uploaded." });
    }
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Transfer-Encoding", "chunked");

    uploadImage(req.files, res);
  }
};

async function uploadImage(files, res) {
  const passThroughStream = new PassThrough();

  try {
    for (let i = 0; i < files.length; i++) {
      let url = files[i].mimetype.split("/");
      let destination = `${url[0]}/${files[i].originalname}.${url[1]}`;
      // Upload the file to Firebase Storage
      await bucket.upload(files[i].path, {
        destination: destination,
      });
      let imageUrl = await bucket.file(destination).getSignedUrl({
        action: "read",
        expires: "03-09-2491", // Set an expiration date in the future
      });

      passThroughStream.write(`${imageUrl},`);
    }
    console.log("All files uploaded successfully.");
    passThroughStream.end();
  } catch (error) {
    console.error("Error uploading files:", error);
    passThroughStream.write(error.message);
    passThroughStream.end();
  }
  passThroughStream.pipe(res);
}
