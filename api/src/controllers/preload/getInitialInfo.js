const axios = require("axios").default;
const { BASE_URL, BASE_VIDEOGAMES } = require("../../../contants.js");
const { RAWG_API_KEY } = process.env;
const { Genre } = require("../../db.js");
const { getPlatforms } = require("../platforms/platforms.js");


async function getInfo(req, res, next) {
  try {
    const platforms= await getPlatforms();

    const genre = await Genre.findAll();

    return res.json({
      platforms,
      genre,
    });
  } catch (err) {
    (err) => next(err);
  }
}

module.exports = {
  getInfo,
};