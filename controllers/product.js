const data = require("../assets/data");

function getProducts(query) {
  return data.filter((d) =>
    d.name.toLowerCase().includes(query.trim().toLowerCase())
  );
}

module.exports = { getProducts };
