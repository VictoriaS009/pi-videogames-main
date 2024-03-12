const { v4: uuidv4, validate: uuidValidate } = require("uuid");
const axios = require("axios").default;
const { Op } = require("sequelize");
const { Videogame, Genre } = require("../../../db");
const { BASE_URL, BASE_VIDEOGAMES } = require("../../../../contants.js");
const { RAWG_API_KEY } = process.env;

const initialGetVideogames = async () => {
  const videogamesPpal = [];

  //Primero busco, acomodo y traigo los videogames de mi base de datos.
  let videogamesDB = await Videogame.findAll({ include: [Genre] });
  videogamesDB.forEach((g) =>
    videogamesPpal.push({
      name: g.dataValues.name,
      genres: g.dataValues.genres.map((genre) => genre.name),
      image:`https://api.rawg.io/api/games?key=ee8b7cccfb09478f97850a5476f9b161`,
      rating: g.dataValues.rating,
      platforms: g.dataValues.platforms,
      id: g.dataValues.id,
      source: "local",
    })
  );

  //Segundo, hago el get via axios, traigo, acomodo y guardo los videogames desde la api.
  let apiRawg = `${BASE_URL}${BASE_VIDEOGAMES}?key=${RAWG_API_KEY}`;

  //Me traigo solo 100 resultados por cuestión de performance.
  for (let i = 1; i <= 5; i++) {
    let resp = await axios.get(apiRawg, {
      responseType: "json",
    });
    apiRawg = resp.data.next;
    resp.data.results.forEach((g) => {
      videogamesPpal.push({
        name: g.name,
        image: g.background_image,
        genres: g.genres.map((genre) => genre.name),
        rating: g.rating,
        platforms: g.platforms.map((platform) => platform.platform.name),
        id: g.id,
        source: "api",
      });
    });
  }

  return videogamesPpal;
};

module.exports = {
  initialGetVideogames,
};
