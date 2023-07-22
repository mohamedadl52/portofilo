const router = require("express").Router()
const CatogressControll = require('../controller/catogres')


router.post('/' , CatogressControll.addCatogress)
router.get('/' , CatogressControll.getCatogress )
router.delete('/:id' , CatogressControll.deleteCatogress )

module.exports = router