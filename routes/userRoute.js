const router = require('express').Router();
const userController = require('../controllers/userController');


// Route to get all users
router.get('/getUsers',userController.getUsers); 

// Route to add a user
router.post('/addUsers',userController.addUsers )

//Route to delete a user
router.delete('/deleteUsers',userController.deleteUsers)


module.exports = router;