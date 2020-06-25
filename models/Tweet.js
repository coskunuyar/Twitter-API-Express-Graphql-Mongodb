const {model , Schema } = require('mongoose');

module.exports = model('Tweet', new Schema({
    text: String,
    ownerId: String,
    reTweetedBy: Array
}));