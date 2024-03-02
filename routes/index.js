const router = require('express').Router();
const feedBackRouter = require('./feedback')
const NotFoundError = require('../errors/notFoundError');

router.use("/feedback", feedBackRouter)
router.use((req, res, next) => {
    next(new NotFoundError('Unknown route'))
})

module.exports = router;