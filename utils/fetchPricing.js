const config = require("../config");
const fetchData = require("./fetchData");

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const fetchPricing = async (page_size) => {
  for (let pageNumber = 1; pageNumber < page_size + 1; pageNumber++) {
    await sleep(2000);
    fetchData.fetchData(config.buffurl + pageNumber);
  }
};

module.exports = {fetchPricing}
