const mongoose = require('mongoose');
const {Schema} = mongoose;

const questionSchema = new Schema({
  category: {
    type: String,
    default: null,
  },
  question: {
    type: String,
    default: null,
  },
  status: {
    type: Number,
    enum: [       
        0,
        1,
    ],
    default: 1,
},
}, {timestamps: true, collation: {locale: 'en_US', strength: 1}});

questionSchema.statics = {
  STATUS: {
    ACTIVE: 1,
    INACTIVE: 0,
  },

  ...questionSchema.statics,
};

module.exports = mongoose.model('Question', questionSchema);