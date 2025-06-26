const router = require('express').Router();
const userController = require('../controllers/userController');
const loggerMiddleware = require('../middlewares/loggerMiddleware');


// Route to get all users
router.get('/getUsers',loggerMiddleware,userController.getUsers); 

// Route to add a user
router.post('/addUsers',loggerMiddleware,userController.addUsers )

//Route to delete a user
router.delete('/deleteUsers',loggerMiddleware,userController.deleteUsers)

//Route to update a user
router.put('/updateUsers',loggerMiddleware, userController.updateUsers)


module.exports = router;