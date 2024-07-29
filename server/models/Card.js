const {Schema, model} = require('mongoose') 

const Card = new Schema({
      id: { type: Number, required: true },
      class: { type: String, required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      src: { type: String, required: true },
      src2: { type: String },
      src3: { type: String },
      srcmini: { type: String },
      src2mini: { type: String },
      src3mini: { type: String }
});

module.exports = model('Card', Card);