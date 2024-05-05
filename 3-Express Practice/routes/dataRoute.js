const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// router.get('/',dataController.getData);
// router.post('/',dataController.createData);
// router.post('/postman',dataController.createDataPostman);
// router.put('/:id',dataController.updateData);
// router.delete('/:id',dataController.deleteData);

router.route('/').get(dataController.getData).post(dataController.createData);
router.route('/postman').post(dataController.createDataPostman);
router.route('/:id').put(dataController.updateData).delete(dataController.deleteData);

module.exports = router;