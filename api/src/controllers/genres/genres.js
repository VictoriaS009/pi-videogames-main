const { Genre } = require("../../db");
const axios = require("axios").default;
const { BASE_URL, BASE_GENRES } = require("../../../contants.js");
const {RAWG_API_KEY} = process.env


async function getGenres(req, res, next) {

  try{

    const consultaApiGenres = await axios
        .get(`${BASE_URL}${BASE_GENRES}?key=${RAWG_API_KEY}`, {
          responseType: "json",
        })
      
    const genresApi = consultaApiGenres.data.results;

    genresApi.map(async (g) => 
         await Genre.findOrCreate({
          where: {name: g.name},
          defaults: {
            id: g.id,
            name: g.name
          }}) 
    )

    res.json({data: genresApi})

  } catch(err) {
       (err) => next(err);
  }
}


//Acá estuve probando la posibilidad de agregar géneros; queda por las dudas pero no está siendo utlizada.
function addGenre(req, res, next) {
  const genre = req.body;
  console.log(genre);

  if (!genre)
    return res.sendStatus({
      error: 500,
      message: "Usuario debe enviar un genre.",
    });
  Genre.findOrCreate({
    where: {
      name: genre.name,
    },
    defaults:{
      id: uuidv4(),
      name: genre.name}
    })
    .then((resp) => res.json(resp))
    .catch((err) => next(err))
}

module.exports = {
  getGenres,
};