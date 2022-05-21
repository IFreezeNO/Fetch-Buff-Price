var fs = require("fs");

const insertData = (arrPrices) => {
  fs.writeFile(
    "./prices/prices.json",
    JSON.stringify(arrPrices, null, 4),
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Prices has been updated");
    }
  );
};

module.exports = {insertData}
