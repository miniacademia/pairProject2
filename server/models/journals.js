const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {hashPassword} = require('../helpers/bcrpytPassword')

const JournalSchema = new Schema({
  title: {
    type: String,
    required: [true, 'need a title']
  },
  description: {
    type: String,
  },
  fileUrl: {
    type: String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})
const Journal = mongoose.model('Journal',JournalSchema)
// const mongoose = require('mongoose')


module.exports = Journal