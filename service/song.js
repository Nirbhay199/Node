const Song = require("/Users/610weblab/Documents/Node/modal/song.js");
module.exports = class SongService {
  static async addSong(music, id) {
    try {
      let data_2 = music.map((_) => {
        return {
          name: _.name,
          audio_file: _.audio_file,
          singer_id: id,
        };
      });
      let response = await Song.insertMany(data_2);
      return response;
    } catch (_) {
      return _.message;
    }
  }

  static async getSongs() {
    try {
      let response = await Song.find({});
      return response;
    } catch (_) {
      return _.message;
    }
  }
};
