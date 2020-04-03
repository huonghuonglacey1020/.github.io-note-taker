const express = require('express');
const apiRoute = require('./route/apiRoute')
const html = require('./route/html')
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static('public'));
app.use('/api', apiRoute);
app.use('/', html);
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});