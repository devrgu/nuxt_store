const Router = require('express')
const router = new Router()
const controller = require('./authController')
const authMiddleware = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/roleMiddleware')

router.post('/auth/registration', controller.registration)  
router.post('/auth/login', controller.login)
router.get('/auth/users', controller.getUsers)

router.post('/api/cards', controller.cards)
router.post('/api/titles', controller.titles)
router.get('/api/cards', controller.cardsGet)
router.get('/api/titles', controller.titlesGet)

module.exports = router