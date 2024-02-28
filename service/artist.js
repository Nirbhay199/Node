const Artist = require("/Users/610weblab/Documents/Node/modal/artist.js");
module.exports = class ArtistService {
  static async addArtist(data) {
    console.log(data);
    try {
      let newData = {
        name: data.name,
        about: data.about,
        profile_pic: data.profile_pic,
        music: data.music,
      };
      const response = await Artist(newData).save();
      return response;
    } catch (error) {
      return error;
    }
  }

  static async deleteArtist(id) {
    try {
      console.log(id);
      let response = await Artist.deleteOne({ _id: id });
      return response;
    } catch (_) {
      return _;
    }
  }

  static async getSingers() {
    try {
      const artistsWithSongs = await Artist.aggregate([
        {
          $lookup: {
            from: "songs", // name of the songs collection in your database
            localField: "_id", // field from the artists collection
            foreignField: "singer_id", // field from the songs collection
            as: "songs", // field name for the joined data
          },
        },
        // {
        //   $project: {
        //     _id: 1, // Include artist's _id
        //     name: 1, // Include artist's name
        //     songNames: "$songs.name", // Include only song titles from the joined data
        //   },
        // },
      ]);
      console.log(artistsWithSongs);
      return artistsWithSongs;
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  }
};
