const redis = require("ioredis");

async function main(redisClient) {
    console.info("Connected to Redis");
    await redisClient.on("error", function (err) {
        console.log("Error " + err);
    });

    await redisClient.set("octocat", "Mona the Octocat");
    return redisClient.get("octocat");
}

const redisClient = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
});

main(redisClient).then((data) => {
    console.info(data)
    redisClient.disconnect();
}).catch((err) => {
    console.error(err);
    redisClient.disconnect();
});