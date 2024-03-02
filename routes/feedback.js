const router = require("express").Router();
const {celebrate, Joi} = require("celebrate")
const {regexPhoneValidation} = require("../utils/constants");
const {newFeedBack} = require("../controllers/feedback");

router.post("/", celebrate({
    body: Joi.object().keys({
        name: Joi.string().required().min(2).max(32),
        email: Joi.string().required().email(),
        phone: Joi.string().required().pattern(regexPhoneValidation)
    }),
}), newFeedBack)

module.exports = router;