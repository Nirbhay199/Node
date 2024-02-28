const Artist = require("/workspaces/Node/service/artist.js");
const Song = require("/workspaces/Node/service/song.js");

module.exports = class Singers {
  static async addSinger(req, res) {
    console.log("khskdskjdksjkdjk");
    try {
      let response = await Artist.addArtist(req.body);
      let response2 = await Song.addSong(req.body["music"], response._id);
      res.status(200).json({ success: true, message: response });
    } catch (_) {
      console.log({ success: false, message: _ });
      res.status(500).json({ success: false, message: _ });
    }
  }

  static async getSinger(req, res) {
    let response = await Artist.getSingers();
    res.status(200).json({ success: true, message: response });
  }
};
