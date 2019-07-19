const Journal = require('../models/journals')

class JournalController {
  static addFile(req,res,next) {
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
}

module.exports = JournalController