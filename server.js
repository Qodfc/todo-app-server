const fastify = require('fastify')({
    logger: true
});
const { memoSchema, userSchema, userLoginSchema } = require('./model');

fastify.addSchema(memoSchema);
fastify.addSchema(userSchema);
fastify.addSchema(userLoginSchema);

const { getRoute, setRoute } = require('./api');
const { loginRoute, registerRoute } = require('./auth');

fastify.register(getRoute);
fastify.register(setRoute);
fastify.register(loginRoute);
fastify.register(registerRoute);

const start = async () => {
    try {
        await fastify.listen({
            port: 3000
        });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

start();