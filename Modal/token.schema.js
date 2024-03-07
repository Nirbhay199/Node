const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tokenSchema = Schema({
    user_id: {
        type: String,
        ref: 'User'
    },
    token: {
        type: String,
    },
    fcm: {
        type: String,
    }
});
module.exports = Token = mongoose.model('Token', tokenSchema);