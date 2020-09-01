const {Router} =require("express");
const router = Router();
const { getUsers,getUsersById, createUser, updateUser,deleteUser } =require('../controllers/index_controllers');
const { getAsis } =require('../controllers/buscar');



router.get('/users', getUsers );
router.get ('/users/:id', getUsersById);
router.post('/users', createUser);
router.put('/users/:id',updateUser);
router.delete ('/users/:id', deleteUser);
router.get('/buscar/:correo',getAsis);

module.exports = router ;