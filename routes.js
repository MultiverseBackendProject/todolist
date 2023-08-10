const router = require('express').Router()
// const { requireAuth } = require('./middleware/auth')
const { login, logout } = require('./controllers/authController')
const { protected, unprotected } = require('./main_routes/middlewareRoutes')
const { requiresAuth } = require('express-openid-connect')

// router.get('/', requiresAuth(), home)
router.get('/login', requiresAuth(), login)
router.get('/logout', logout)

//protected + unprotected routes
router.get('/protected', requiresAuth(), protected)
router.get('/unprotected', unprotected)

module.exports = router;