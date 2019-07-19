const {verifyToken} = require('../helpers/jwt')
const Journal = require('../models/journals')

function authorization(req,res,next) {
    Journal.findById(req.params.id)
        .then((journal => {
            if(journal) {
                if(journal.userId == req.decoded._id) {
                    next()
                } else {
                    throw {status:403, message:'Unauthorized'}
                }
            } else {
                throw {status:404, message: 'journal not found'}
            }
        }))
        .catch(next)
}

module.exports = authorization