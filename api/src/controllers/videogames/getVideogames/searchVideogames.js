const axios = require("axios").default;
const { Op } = require("sequelize");
const { Videogame, Genre } = require("../../../db");
const { BASE_URL, BASE_VIDEOGAMES } = require("../../../../contants.js");
const { RAWG_API_KEY } = process.env;

const searchVideogames = async (search) => {
  const results = [];

  //Primero busco, acomodo y traigo los videogames de mi base de datos.
  const videogamesDB = await Videogame.findAll(
    { where: { name: { [Op.iLike]: `%${search}%` } } },
    { include: [Genre] }
  );

  const dataDB =
    videogamesDB &&
    videogamesDB.map((g) => ({
      name: g.dataValues.name,
      genres: g.dataValues.genres,
      image: `https://api.rawg.io/api/games?key=ee8b7cccfb09478f97850a5476f9b161`,
      rating: g.dataValues.rating,
      platforms: g.dataValues.platforms,
      id: g.dataValues.id,
      source: "local",
    }));

  dataDB.forEach((g) => results.push(g));

  //Segundo, hago el get via axios, traigo, acomodo y guardo los videogames desde la api.
  let apiRawg = `${BASE_URL}${BASE_VIDEOGAMES}?key=${RAWG_API_KEY}&search=${search}`;

  for (let i = 1; i <= 7 && apiRawg; i++) {
    const videogamesAPI = await axios.get(apiRawg, {
      responseType: "json",
    });

    //Acá uso el atributo next para traerme mas videogames desde la API, ya que por defecto me trae solo 15.
    apiRawg = videogamesAPI.data.next;

    const dataAPI =
      videogamesAPI.data.results &&
      videogamesAPI.data.results.map((g) => ({
        name: g.name,
        image: g.background_image,
        genres: g.genres && g.genres.map((genre) => genre.name),
        rating: g.rating,
        platforms:
          g.platforms && g.platforms.map((platform) => platform.platform.name),
        id: g.id,
        source: "api",
      }));

    const filteredDataAPI = dataAPI.filter((g) =>
      g.name.toLowerCase().includes(search.toLowerCase())
    );

    filteredDataAPI.forEach((g) => results.push(g));
  }

  if (results.length === 0) {
    results.push({
      name: "Videogames no encontrados",
      image: "",
      genres: "",
      rating: "",
      platforms: "",
      id: "",
      source: "",
    });
  }

  return results;
};

module.exports = {
  searchVideogames,
};