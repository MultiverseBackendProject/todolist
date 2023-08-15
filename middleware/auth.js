// const requireAuth = (req, res, next) => {
//     if(!req.oidc.isAuthenticated()) {
//         res.status(401).redirect('/login')
//     } else {
//         next()
//     }
// }

// module.exports = {
//     requireAuth
// }

/**
 * Basically, there is no need to write your own auth middleware unless you want to have your own login/logout via email and password
 */
