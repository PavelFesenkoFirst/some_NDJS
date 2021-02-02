const db = require("../models");

class UserController {
    async getProfile(req,res){
        const id = req.user.id;
        try {
            const user = await db.users.findOne({where: {id}})
            res.send({userMe: {email: user.email, first_name: user.first_name, last_name: user.last_name}})
        }
        catch (e) {
            console.log(e);
        }
    }
}

module.exports = new UserController()