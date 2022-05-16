module.exports = {
    tokenNotFound: {
        "MesageType": "Error",
        "Message": "Token no proporcionado",
        "Component": "Token/Authentication",
        "Authenticated": false
    },
    invalidToken: {
        "MesageType": "Error",
        "Message": "El token proporcionado es invalido",
        "Component": "Token/Authentication",
        "Authenticated": false
    },
    loginSuccessfully: {
        "MesageType": "Succes",
        "Message": "El token se ha generado correctamente",
        "Component": "Token/Authentication",
        "Authenticated": true
    }
}