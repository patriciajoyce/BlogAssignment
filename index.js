const express = require('express');
const app = express();


app.use('/', express.static('./public'));

app.get('/api/info',(request, response, next) => {
    response.header('Content-Type', 'application/json');
    	response.send({});
});

app.listen(1133, () => {
    console.log('Example app listening on port 1133!');

});