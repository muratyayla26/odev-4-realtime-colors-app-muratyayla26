const redisCliet = require("./redis");

function Colors() {
    this.client = redisCliet.getClient();
};

module.exports = new Colors();