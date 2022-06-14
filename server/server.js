const connectionFunc = require('./db')
const express = require('express');
const cors = require('cors')

const app = express();
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')

const dotenv = require('dotenv')
dotenv.config();


const PORT = 3003;

app.use(cors())
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);


(async () => {
  try {
  await connectionFunc();
  app.listen(PORT, () =>  console.log(`server listening on ${PORT}`));
} catch (err) {
  console.error(err)
}
})()