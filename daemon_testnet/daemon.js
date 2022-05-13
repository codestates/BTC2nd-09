const cron = require("node-cron");
const models = require("./models");
const axios = require("axios");

// db 기준 최근 블록넘버
const getBlockNum = async () => {
  const result = await models.block.max("height").then((max) => {
    return max;
  });
  return result;
};

// 블록정보 db insert
const getBlockInfo = async () => {
  const latestNum = await getBlockNum();
  try {
    axios
      .get("https://bombay-lcd.terra.dev/blocks/latest")
      .then((res) => {
        console.log(res.data.block.header);
        return res.data.block.header;
      })
      .then((res) => {
        const { chain_id, height, time, last_commit_hash, data_hash } = res;
        if (latestNum < height) {
          models.block.create({
            chain_id,
            height,
            time,
            last_commit_hash,
            data_hash,
          });
        }
      });
  } catch (e) {
    Error(e);
  }
};

// 매 초마다 실행
const task = cron.schedule(
  "* * * * * *",
  async () => {
    getBlockInfo();
  },
  {
    scheduled: false,
  }
);

task.start();
