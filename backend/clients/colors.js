const redisCliet = require("./redis");

function Colors() {
  this.client = redisCliet.getClient();
}

module.exports = new Colors();

Colors.prototype.upsert = function (color) {
  this.client.set("colorHex", color);
};

Colors.prototype.list = function (callback) {
  this.client.get("colorHex", function (err, reply) {
    console.log("cevapppp", reply);
    return callback(reply);
  });
};
