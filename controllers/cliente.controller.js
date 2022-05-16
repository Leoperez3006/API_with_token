
var config = require('../helpers/config');
var pool = config.pool;

//returns all clients
module.exports.GETALL = (req, response) => {
    let sql = "SELECT * FROM clientes;";
    pool.query(sql, (error, results, fields) => {
        console.log(response)
        if (error) response.send(error);
        else response.json(results);
    });
}
// return client by its id
module.exports.GET = (request, response) => {
    let sql = "SELECT * FROM clientes WHERE cliente_id = ?;";
    console.log("id: " + [request.params.id]);
    pool.query(sql, [request.params.id], (error, results, fields) => {
        if (error) response.send(error);
        else response.json(results);
    });
}


// creates a client
module.exports.CREATE = (request, response) => {
    console.log('aaaa')
    const body = request.body 
    console.log('body: ', request.body)
    let sql = "INSERT INTO clientes (nombre, apellido_paterno, apellido_materno,domicilio, correo_electronico) VALUES (?,?,?,?,?);";
    pool.query(sql, [body.nombre, body.apellido_paterno,body.apellido_materno,body.domicilio,body.correo_electronico], (error, results, fields) => {
        if(error){
            response.send(error);
         }
         response.json(results);
    })    
}

// updates a client
module.exports.UPDATE = (request, response) => {
    const body = request.body
    const sql = 'UPDATE clientes SET nombre = ?, apellido_paterno = ?, apellido_materno = ?, domicilio = ?, correo_electronico = ? WHERE cliente_id = ?;';
    pool.query(sql, [body.nombre, body.apellido_paterno,body.apellido_materno,body.domicilio,body.correo_electronico, request.params.id], (error, results, fields) => {
        if(error){
            response.send(error);
        }
        response.json(results);
    })
}

// deletes a client by its id
module.exports.DELETE = (request, response) => {
    const sql = 'DELETE FROM clientes WHERE cliente_id = ?;'
    pool.query(sql, [request.params.id], (error, results, fields) => {
        if(error){
            response.send(error);
        }
        response.json(results);
    })
}

