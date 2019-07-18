const router = require('express').Router()
const JournalController = require('../controllers/journalController')

router.post('/addFile',JournalController.addFile)
router.get('/allJournal',JournalController.findAllJournal)

module.exports = router
