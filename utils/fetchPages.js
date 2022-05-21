const config = require("../config");
const axios = require("axios");
const fetchPricing = require("./fetchPricing");

const fetchPageNumber = () => {
  axios
    .get(config.buffurl, {
      headers: {
        Cookie: config.cookie,
      },
    })
    .then((res) => {
      let data = res.data.data;
      fetchPricing.fetchPricing(data.total_page)
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {fetchPageNumber}
