const express = require('express');
const config = require('./config/jwt')
const cors = require('cors');
const api = require('./routes/api')
const tok = require('./routes/token')

const app =  express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000;

const middleware = require('./middleware/jwt-middleware');

app.use(cors())

app.use(bodyParser.json());
app.set("key",config.key)

// route with middleware
app.use('/api', middleware, api);
// route without middleware to ask for a token
app.use('/token', tok);



// run aplication on specific port
app.listen(port, () => {
    console.log('El servidor inicio en el puerto ' + port);
});

