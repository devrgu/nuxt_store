const {Schema, model} = require('mongoose') 

const Title = new Schema({
      name: { type: String, required: true }
});

module.exports = model('Title', Title);