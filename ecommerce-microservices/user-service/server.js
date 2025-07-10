require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`User service running on port ${process.env.PORT}`);
});
