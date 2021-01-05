
const express = require('express');
const router = express.Router();

const userHomeController = require('../../app/controllers/user/UserHomeController');
// const router = require('../index_router');

router.get('/', userHomeController.GetHome);
router.post('/create-account', userHomeController.CreateAccount);
router.get('/forum', userHomeController.GetForumPage);
router.post('/login', userHomeController.ValidateLogin);
router.get('/logout', userHomeController.LogoutAccount);
router.get('/profile', userHomeController.showUserProfile);
router.get('/projects-management', userHomeController.showProjectManagement);


router.get('/create', userHomeController.CreateProject);
router.post('/create', userHomeController.PostCreateProject);

module.exports = router;
