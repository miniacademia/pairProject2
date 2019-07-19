const Journal = require('../models/journals')

class JournalController {
  static addFile(req,res,next) {
    console.log(req.decoded)
    Journal.create({
      title: req.body.title,
      description: req.body.description,
      fileUrl: req.body.fileUrl,
      userId: req.decoded._id
    })
      .then((journalCreated) => {
        res.status(201).json(journalCreated)
      })
      .catch(next)
  }

  static findAllJournal(req,res,next) {
    Journal.find().populate('userId')
      .then((journalFound) => {
        res.status(200).json(journalFound)
      })
      .catch(next)
  }

  static deleteJournal(req, res, next){
    const id = req.params.id
    Journal.findByIdAndDelete(id)
    .then(response => {
        console.log(response)
        res.status(200).json(response)
    })
    .catch(next)
  }

  static journalByUser(req,res,next) {
    Journal.find({userId: req.decoded._id})
      .then(dataFound => {
        res.status(200).json(dataFound)
      })
      .catch(next)
  }

  
}

module.exports = JournalController