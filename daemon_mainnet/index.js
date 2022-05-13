const express = require("express");
const app = express();
const block = require("./routes/block");
const transaction = require("./routes/transaction");
const { sequelize } = require("./models");
const cors = require("cors");
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use("/mainblock", block);
app.use("/maintransaction", transaction);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(PORT, () => {
  console.log(`Mainnet서버 ${PORT}에서 가동중 🚀`);
});
