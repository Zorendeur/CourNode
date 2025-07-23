const express = require("express");
const router = express.Router();
const controller = require("../controllers/joshua.controller")

router.post('/post', controller.create);
router.get('/getAll', controller.getAll);
router.put('/update', controller.update);
router.delete('/delete', controller.delete);

module.exports = router;