const router = require('express').Router();
const verify = require('../verifyToken')
const { updateUser, deleteUser, getUser, getAllUsers } = require('../controllers/users');

router.put('/:id', verify, updateUser);
router.delete('/:id', verify, deleteUser);
router.get('/:id', getUser);
router.get('/', getAllUsers);






module.exports = router;