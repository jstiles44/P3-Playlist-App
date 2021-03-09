const { Router } = require('express')
const songsRouter = require('./songs')
const usersRouter = require('./users')

const router = Router();

router.get('/', (req, res) => res.send('This is the api root!'))

router.use('/', usersRouter);
router.use('/songs', songsRouter);

module.exports = router