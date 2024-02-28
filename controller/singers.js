const Artist = require("/Users/610weblab/Documents/Node/service/artist.js");
const Song = require("/Users/610weblab/Documents/Node/service/song.js");

module.exports = class Singers {
  static async addSinger(req, res) {
    console.log("khskdskjdksjkdjk");
    try {
      let artistResponse = await Artist.addArtist(req.body);
      let songResponse;
      try {
        songResponse = await Song.addSong(
          req.body["music"],
          artistResponse._id
        );
      } catch (error) {
        // Handle error when adding the song
        console.error("Error adding song:", error);
        // If adding the song fails, delete the artist that was added earlier
        await Artist.deleteArtist(artistResponse._id); // Assuming you have a method to delete an artist by ID
        res.status(500).json({ success: false, message: "Failed to add song" });
      }
      res.status(200).json({ success: true, message: artistResponse });
    } catch (_) {
      console.log({ success: false, message: _ });
      res.status(500).json({ success: false, message: _ });
    }
  }

  static async deleteArtistBYID(req, res) {
    let response = await Artist.deleteArtist(req.body.id);
    if (response.deletedCount > 0) {
      res.status(200).json({ success: true, message: "Data Deleted" });
    } else {
      res.status(422).json({ success: false, message: "Cant Deleted" });
    }
  }

  static async getSinger(req, res) {
    let response = await Artist.getSingers();
    res.status(200).json({ success: true, message: response });
  }
};
