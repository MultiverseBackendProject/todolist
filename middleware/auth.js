const requireAuth = (req, res, next ) => {
    if(!req.odic.isAuthenticated()) {
        res.status(401).redirect('login')
    } else {
        next()
    }
}

module.exports = {
    requireAuth
}