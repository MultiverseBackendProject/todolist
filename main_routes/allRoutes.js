const protected = (req, res, next) => {
    res.send('THIS IS A PROTECTED ROUTE')
}

const unprotected = (req, res, next) => {
    res.send('ANYONE CAN ACCESS THIS ROUTE')
}

module.exports = {
    protected,
    unprotected
}