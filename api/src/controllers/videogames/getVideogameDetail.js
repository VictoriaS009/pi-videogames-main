const { v4: uuidv4, validate: uuidValidate } = require("uuid");
const axios = require("axios").default;
const { Op } = require("sequelize");
const { Videogame, Genre } = require("../../db");
const { BASE_URL, BASE_VIDEOGAMES } = require("../../../contants.js");
const { RAWG_API_KEY } = process.env;

async function getVideogameDetail(req, res, next) {
  try {
    const { id } = req.params;
    var videogame = undefined;

    if (uuidValidate(id)) {
      videogame = await Videogame.findByPk(id, {
        include: Genre,
      });

      var {
        id: videogame_id,
        name,
        description,
        released,
        rating,
        platforms: platformsToFix,
        background_image,
        genres: genresToFix,
      } = videogame.dataValues;
      
      var genres = genresToFix.map((g) => ({
        id: g.dataValues.id,
        name: g.dataValues.name,
      }));

      var platforms = platformsToFix
        .split(",")
        .map((p) => ({ platform: { name: p } }));

      background_image = `https://api.rawg.io/api/games?key=ee8b7cccfb09478f97850a5476f9b161`

    } else {
        
      videogame = await axios.get(
        `${BASE_URL}${BASE_VIDEOGAMES}/${id.toString()}?key=${RAWG_API_KEY}`,
        {responseType: "json",});

      var {
        id: videogame_id,
        name,
        description_raw: description,
        released,
        rating,
        platforms,
        background_image,
        genres,
      } = videogame.data;
    }

    res.json({
      data: {
        id: videogame_id,
        name: name,
        description: description,
        released: released,
        rating: rating,
        platforms: platforms.map((p) => p.platform.name),
        image: background_image,
        genres: genres.map((p) => p.name),
      },
    });
    
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getVideogameDetail,
};