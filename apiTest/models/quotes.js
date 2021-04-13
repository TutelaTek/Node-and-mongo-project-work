
// models the database data
const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    quote: { type: String, required: true },
    date: { type: Number, default: Date.now() }
});
//                         collection name
const model = mongoose.model('QuoteModel', quoteSchema);

module.exports = model