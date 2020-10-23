const express = require('express');
const router = express.Router();

const userProfileController = require('../../app/controllers/user/UserProfileController');
// const route = require('../index_router');

router.get('/', userProfileController.GetProfile);

module.exports = router;