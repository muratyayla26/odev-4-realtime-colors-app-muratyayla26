const redis = require("redis");
const getClient = () => {
  return redis.createClient(process.env.REDIS_URL);
};
module.exports.getClient = getClient;

/* redis port for local environment
{
    host: "localhost",
    port: 6379,
}*/
