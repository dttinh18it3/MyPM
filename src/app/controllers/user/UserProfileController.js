class UserProfileController {
    GetProfile(request, response) {
        response.render('userProfile',{user: request.session.user_session});
    }
}

module.exports = new UserProfileController;