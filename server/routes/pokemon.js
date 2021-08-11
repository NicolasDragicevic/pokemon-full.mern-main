const { Router } = require(`express`);

const router = Router();

router.get(`/:pokeId`, require(`../controllers/getPokemonById`));
module.exports = router;
