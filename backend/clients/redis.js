const redis = require("redis");
const getClient = () => {
  return redis.createClient(process.env.REDIS_URL);
};
module.exports.getClient = getClient;

/*
{
    host: "localhost",
    port: 6379,
  }*/
