const { Router } = require('express')
const controllers = require('../controllers/songs')
const restrict = require('../helpers/restrict')

const router = Router()

router.get('/', controllers.getSongs)
router.get('/:id', controllers.getSong)
router.post('/', restrict, controllers.createSong)
router.post('/', restrict, controllers.createSong)
router.put('/:id', restrict, controllers.updateSong)
router.delete('/:id', restrict, controllers.deleteSong)

module.exports = router