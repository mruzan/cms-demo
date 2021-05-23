const mongoose = require('mongoose');
const {Schema} = mongoose;

const moodSchema = new Schema({
  mood_id: {
    type: String,
    default: null,
  },
  content: {
    type: String,
    default: null,
  },
  smiley: {
    type: String,
    default: null,
  },
}, {timestamps: true, collation: {locale: 'en_US', strength: 1}});


module.exports = mongoose.model('Mood', moodSchema);