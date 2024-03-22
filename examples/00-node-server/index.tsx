import Fastify from 'fastify';

const fastify = Fastify({
  logger: true
});

// Declare a route
fastify.get('/', function (request, response) {
  response.send({ hello: 'world' });
})

const PORT = process.env.HTTP_PORT as unknown as number || 3000;
console.log('PORT', PORT);
fastify.listen({ port: PORT }, function (err, address) {
  console.log(`server listening on ${address}`)
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})