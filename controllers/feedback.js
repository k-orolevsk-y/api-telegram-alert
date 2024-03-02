const {checkIpTimeout} = require("../utils/timeout");
const { sendMessage } = require("../utils/telegram");
const TooManyRequests = require("../errors/tooManyRequests");
const newFeedBack = async (req, res, next) => {
    if (checkIpTimeout(req.ip)) {
        return next(new TooManyRequests("The request was recently submitted"));
    }

    try {
        await sendMessage(`Поступила новая заявка!\n\nИмя: <b>${req?.body?.name}</b>\nE-mail: <b>${req?.body?.email}</b>\nТелефон: <b>${req?.body?.phone}</b>`)
    } catch (e) {
        console.log("error with send message to telegram", e)

        // Internal Server Error
        return next(new Error())
    }

    res.status(201).send({ success: true });
};

module.exports = {
    newFeedBack
};