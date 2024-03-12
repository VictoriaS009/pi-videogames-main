const { Router } = require("express");
const { getVideogameDetail } = require("../controllers/videogames/getVideogameDetail.js");
const { addVideogame } = require("../controllers/videogames/addVideogames.js");
const { getVideogames } = require("../controllers/videogames/getVideogames.js");
const { getInfo } = require("../controllers/preload/getInitialInfo.js")

// Importar todos los routers;

const router = Router();

// Configurar los routers

router.get("", getInfo);
router.get("/videogames", getVideogames);
router.get("/videogames/:id", getVideogameDetail);
router.post("/videogame", addVideogame);

module.exports = router;