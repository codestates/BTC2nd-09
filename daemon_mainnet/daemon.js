const cron = require("node-cron");
const Web3 = require("web3");
const models = require("./models");
const axios = require("axios");
const db = require("./models");
require("dotenv").config();

// ankr 프로토콜 이용시 참고
// const url_auth = `https://${process.env.ANKRUSERNAME}:${process.env.ANKRPASSWORD}@apis.ankr.com/cf6ff43b178f4b02a3660d897035ab09/a7cfd92b3af45e6a981e4d5d8a5a764d/terra/full/columbus`; // authentication
// const url_token =
//   "https://apis.ankr.com/9f506be01f314c7da0c468bfa10b4d55/a7cfd92b3af45e6a981e4d5d8a5a764d/terra/full/columbus";

// const provider = new Web3.providers.HttpProvider(
//   "https://apis.ankr.com/9f506be01f314c7da0c468bfa10b4d55/a7cfd92b3af45e6a981e4d5d8a5a764d/terra/full/columbus"
// );
// const web3 = new Web3(provider);
// //const web3 = new Web3(new Web3.providers.HttpProvider(url_auth));
// const getBlockNumber = async () => {
//   return await web3.eth.getBlockNumber((error, blockNumber) => {
//     if (!error) {
//       console.log(blockNumber);
//     } else {
//       console.log(error);
//     }
//   });
// };

// address로 tx조회
const getAddressTx = async () => {
  const account = `${process.env.ACCOUNT}`;
  axios
    .get(
      `https://api.extraterrestrial.money/v1/txs/by_account?account=${account}`
    )
    .then((res) => {
      const txArr = res.data.txs;
      txArr.map((el) => {
        if (el !== null) {
          // el.id가 db에 미존재한다는 조건이 필요함
          models.transaction
            .findOne({
              where: { tx_id: el.id },
            })
            .then((res) => {
              models.transaction.create({
                address: account,
                tx_id: el.id,
                chain_id: el.chainId,
                tx_hash: el.txhash,
                blockNumber: el.height,
                gas_used: el.gas_used,
                gas_wanted: el.gas_wanted,
                time: el.timestamp,
              });
            });
        }
      });
    });
};

const task = cron.schedule(
  "* * * * * *",
  async () => {
    getAddressTx();
  },
  {
    scheduled: false,
  }
);

task.start();
