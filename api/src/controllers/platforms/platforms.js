const { initialGetVideogames } = require("./../videogames/getVideogames/initialVideogames");

async function getPlatforms(req, res, next) {
    const results = await initialGetVideogames();
    const platforms = []

  try {
    results.forEach(g=>g.platforms.forEach(p=>{if(!platforms.includes(p)){platforms.push(p)}}))
    return platforms;
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getPlatforms,
};