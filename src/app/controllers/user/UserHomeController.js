const crypto = require('crypto');
const User = require('../../models/User');
const Project = require('../../models/Project');
const { json } = require('express');

class UserHomeController{
    
    GetHome(request, response) {
        if(request.session.user_session) {
            response.render('userHome', {user: request.session.user_session});
        } else response.render('userHome');

        
    }

    CreateAccount(request, response, next) {
            const user = new User({
                user_Name: request.body.user_Name,
                gender: request.body.gender,
                dateOfBirth: request.body.dateOfBirth,
                cellphone: request.body.cellphone,
                specialization: request.body.specialization,
                email: request.body.register__email,
                password: crypto.createHash('sha256').update(request.body.pass).digest('hex')
            });

            user.save()
                .then(() => {
                    response.redirect('/');
                })
                .catch(error => {
                    console.log(error);
                })
    }
    ValidateLogin(request, response, next) {
        User.findOne({ email: request.body.login_email } && { password: crypto.createHash('sha256').update(request.body.login_password).digest('hex')})
            .then((user) => {
                request.session.user_session = user;
                // response.render("userHome", { user });
                response.redirect("/");
            })
            .catch(next);
    }

    LogoutAccount(request, response, next) {
        delete request.session.user_session;
        response.redirect('/');
    }

    
    
    

    GetForumPage(request, response) {
        response.send('forum page here!!!!')
    }
    showUserProfile(request, response) {
        response.send('profile page here!!!!')
    }
    showProjectManagement(request, response) {
        response.render('userProjectManagement',{user: request.session.user_session})
    }

    CreateProject(request, response, next){
        response.render("userCreate",{user: request.session.user_session});
    }
    PostCreateProject(request, response){
        response.json(request.body);
    }
}

module.exports = new UserHomeController;
