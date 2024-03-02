const ip_timeout = {};
const timeout = 60 * 60 * 1000;

const checkIpTimeout = (ip) => {
    const item = ip_timeout[ip]
    const current_time = new Date().getTime()

    if (!item) {
        ip_timeout[ip] = current_time + timeout;
        return false;
    } else if (item >= current_time) {
        return true;
    }

    delete ip_timeout[ip];

    ip_timeout[ip] = current_time + timeout;
    return false;
};

setInterval(() => {
    const current_time = new Date().getTime();

    for (const key in ip_timeout) {
        if (ip_timeout.hasOwnProperty(key)) {
            if (ip_timeout[key] < current_time) {
                delete ip_timeout[key];
            }
        }
    }
}, 1000 * 60)

module.exports = {
    checkIpTimeout
};