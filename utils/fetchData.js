const config = require("../config");
const axios = require("axios");
const insertData = require("./insertData");

let arrPrices = [];
const fetchData = (url) => {
  axios
    .get(url, {
      headers: {
        Cookie: config.cookie,
      },
    })
    .then((res) => {
      let data = res.data.data;

      console.log(
        `Status: ${res.data.code}. ${data.page_num}/${data.total_page}`
      );

      for (let i = 0; i < data.items.length; i++) {
        arrPrices.push({
          id : data.items[i].id,
          name : data.items[i].short_name,
          price : `${parseFloat(data.items[i].quick_price / config.conversion_rate).toFixed(2)}`,
          steam_market_url : data.items[i].steam_market_url,
          weapon_type : data.items[1].goods_info.info.tags.type?.localized_name,
          rarity : data.items[1].goods_info.info.tags.rarity?.localized_name,
          quality : data.items[1].goods_info.info.tags.exterior?.localized_name,
        });
      }
      if (data.page_num === data.total_page) {
        insertData.insertData(arrPrices);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {fetchData}
