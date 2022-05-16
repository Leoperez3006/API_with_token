const jwt = require('jsonwebtoken');
var config = require('../config/jwt');
var msg = require('../helpers/messages')



module.exports.GET = (request,response) => {
    console.log('Peticion de token')
    const payload = {
        msg: 'Hola mundo'
    }
    let token = jwt.sign(payload, config.key, {expiresIn: 7200})
    response.json({
        mensaje: msg.loginSuccessfully,
        token: token
    })

}