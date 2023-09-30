const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// this is our schema file for the mongodb

let AccountSchema = new Schema({
  ETH: {type: String, required: false, max: 64},
});

// Export the model
module.exports = mongoose.model('Account', AccountSchema);
