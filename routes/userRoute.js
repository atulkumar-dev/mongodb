const router = require('express').Router();
const userController = require('../controllers/userController');


// Route to add a user
router.get('/getUsers',userController.getUsers); 



module.exports = router;