const db = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const { secret } = require('../config/config')

const generateAccessToken = (id, isAdmin) => {
    const payload = {
        id,
        isAdmin
    }
    return jwt.sign(payload, secret, {expiresIn: '24h'})
}

class AuthController {
    async registration(req,res){
        const {email,first_name,last_name,password} = req.body;
        const hash = bcrypt.hashSync(password, saltRounds);
        try {
            db.users.create({
                email,
                first_name,
                last_name,
                password:hash,
                user_group_id: 1,
                admin: 0
            }).then(newUser => res.send({registration: "complete", login: newUser.email}));
        }
        catch (e) {
            console.log(e)
        }
    }
    async login(req,res){

        const {email,password} = req.body;

        try {
            db.users.findOne({where: {email: email}}).then(user=>{
                if(!user){
                    return res.status(403).json({message: `Пользователь ${user} не найден`});
                }
                const validPassword = bcrypt.compareSync(password, user.password);
                if(!validPassword){
                    return res.status(403).json({message: `Введен неверный пароль`});
                }
                const token = generateAccessToken(user.id, user.admin);
                res.send({login:"login success", token:token});
            })
        }
        catch (e) {
            console.log(e)
        }
    }
    async getUsers(req, res){
        try {
            const users = await db.users.findAll()
            res.send(users)
        }
        catch (e) {
            console.log('ERROR', e)
        }
    }
}

module.exports = new AuthController()