require('dotenv').config()

module.exports = {
    buffurl: "https://buff.163.com/api/market/goods?game=csgo&page_size=100&page_num=",
    page_size: 240,
    conversion_rate: 7.03571429,
    cookie: process.env.COOKIES
  }