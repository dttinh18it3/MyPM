class UserProfileController {
    GetProfile(request, response) {
        response.render('userProfile');
    }
}

module.exports = new UserProfileController;