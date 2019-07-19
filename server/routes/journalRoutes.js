const router = require('express').Router()
const JournalController = require('../controllers/journalController')
const authentication = require('../middlewares/authentication')

router.get('/allJournal',JournalController.findAllJournal)
router.use(authentication)
router.post('/addFile',JournalController.addFile)
router.delete('/deleteJournal/:id', JournalController.deleteJournal)

module.exports = router
