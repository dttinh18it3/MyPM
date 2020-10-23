const crypto = require('crypto');
const User = require('../../models/User');
const { json } = require('express');

class UserHomeController{
    
    GetHome(request, response) {
        response.render('userHome');

        // try {
        //     const user = new User({
        //         user_Name: 'ABC',
        //         dateOfBirth: '2020-02-01',
        //         gender: 1,
        //         cellphone: '0123456789',
        //         email: 'user@gmail.com',
        //         password: crypto.createHash('sha256').update('password').digest('hex'),
        //     });
        //     user.save().then(() => console.log('save successfully'));
        //     response.render('userHome');
        // } catch (error) {
        //     console.log("error create user: " + error);
        // }

        // User.find({}, function(error, users) {
        //     if (!error) response.json(users);
        //     response.status(400).json({ error: 'ERROR find users!!!' });
        // });
    }

    CreateAccount(request, response, next) {
        response.json(request.body);
        // console.log(request.body);

        // try {
        //     const user = new User({
        //         user_Name: request.body.user_Name,
        //         gender: request.body.gender,
        //         dateOfBirth: request.body.dateOfBirth,
        //         cellphone: request.body.cellphone,
        //         specialization: request.body.specialization,
        //         email: request.body.email,
        //         password: crypto.createHash('sha256').update(request.body.pass).digest('hex')
        //     });
        //     // user.save();
        //     response.render('userHome');
        // } catch (error) {
        //     console.log("error create user: " + error);
        // }
    }
}

module.exports = new UserHomeController;
