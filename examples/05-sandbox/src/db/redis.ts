import IORedis from 'ioredis' ;


export const redis = new IORedis({
  host: "localhost",
  port: 6379,
  password: "12345678" // process.env.REDIS_PASSWORD,
});