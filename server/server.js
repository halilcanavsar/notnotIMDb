const connectionFunc = require('./db')
const express = require('express');
const cors = require('cors')
const app = express();
const router = require('./router');
const PORT = 3003;

app.use(cors())
app.use(express.json());
app.use(router);


(async () => {
  try {
  await connectionFunc();
  app.listen(PORT, () =>  console.log(`server listening on ${PORT}`));
} catch (err) {
  console.error(err)
}
})()