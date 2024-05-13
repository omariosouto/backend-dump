const express = require('express');

module.exports = function(prisma) {
  const router = express.Router();

  router.post('/', async (req, res) => {
    const { name, email } = req.body;
    const user = await prisma.user.create({
      data: { name, email },
    });
    res.json(user);
  });

  router.get('/', async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
  });

  router.put('/:id', async (req, res) => {
    const { name, email } = req.body;
    const { id } = req.params;
    const user = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { name, email },
    });
    res.json(user);
  });

  router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.user.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  });

  return router;
};
