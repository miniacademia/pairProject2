const router = require('express').Router()
const UserController = require('../controllers/userController')
const images = require('../helpers/images')

router.post('/login',UserController.login)
router.post('/register',UserController.create)
router.post('/googleSignIn',UserController.googleSignIn)

router.post('/googleCloudStorage', 
    images.multer.single('file'), 
    images.sendUploadToGCS,
    (req,res,next)=>{
      console.log(req.file)
        let imageLink = req.file.cloudStoragePublicUrl
        console.log(imageLink)
        res.status(200).json(imageLink)
    }
)

module.exports = router
