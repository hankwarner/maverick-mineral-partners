require("dotenv").config();

module.exports = {
    port: process.env.PORT || 8081,

    init(app) {
        
        app.use((req,res,next) => {
            res.locals.currentUser = req.user;
            next();
        })
    }
}