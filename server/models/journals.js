const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {hashPassword} = require('../helpers/bcrpytPassword')

const JournalSchema = new Schema({
  title: {
    type: String
  },
  
})
const Journal = mongoose.model('Journal',JournalSchema)
// const mongoose = require('mongoose')


module.exports = Journal