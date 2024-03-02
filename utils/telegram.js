const TelegramBot = require("node-telegram-bot-api");
const {TELEGRAM_API_KEY = "", CHAT_ID = ""} = process.env;

const bot = new TelegramBot(TELEGRAM_API_KEY);

const sendMessage = async (message) => {
    return await bot.sendMessage(CHAT_ID, message, { parse_mode: "HTML" });
}

module.exports = {
    sendMessage
};