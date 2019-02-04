// server.js
// 'use strict';

const express    = require('express'),
      bodyParser = require('body-parser'),
      app        = express(),
      PORT       = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const parties = require('./api/routes/parties');
const offices = require('./api/routes/offices');

app.use('/api/v1/parties', parties);
app.use('/api/v1/offices', offices);


app.get('/', (req, res) => {
    // res.end(`<h1>Welcome to Politico</h1> ... your partner for credible elections`);
    res.send('/ui/index.html');
})



module.exports = app;