
const path = require('path');
class AdminHomeController{
    
    GetHome(request, response) {
        response.render('adminHome');
        console.log("PATH admin"+ path.join(__dirname));
    }
}

module.exports = new AdminHomeController;
