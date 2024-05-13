const express = require('express');
const { PrismaClient } = require('@prisma/client');
const userRoutes = require('./user');

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use('/users', userRoutes(prisma));

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
