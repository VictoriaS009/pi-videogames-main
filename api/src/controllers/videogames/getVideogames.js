const { searchVideogames } = require("./getVideogames/searchVideogames.js");
const { initialGetVideogames } = require("./getVideogames/initialVideogames.js");

async function getVideogames(req, res, next) {
  const search = req.query.name;
  console.log(search);

  if (search) {
    console.log("Entro a searchVideogames");
    try {
      const results = await searchVideogames(search);
      return res.json(results);
    } catch (e) {
      next(e);
    }
  }

  try {
    console.log("Entro a getVideogames");
    const results = await initialGetVideogames();
    return res.json({ data: results });
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getVideogames,
};