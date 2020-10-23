
const userHomeRouter = require('./user/userHomeRouter');
const adminHomeRouter = require('./admin/adminHomeRouter');
const userProfileRouter = require('./user/userProfileRouter');

function route(app, role) {


    if(role == 'admin') {
        app.use('/', adminHomeRouter);
    }
    else {
        app.use('/profile', userProfileRouter);
        app.use('/', userHomeRouter);
    }
}

module.exports = route;
