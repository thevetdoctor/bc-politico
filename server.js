/* eslint-disable linebreak-style */
// server.js

const express    = require('express');
const bodyParser = require('body-parser');
const path       = require('path');
const app        = express();
const PORT       = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(path.join(__dirname, 'ui')));


const parties = require('./api/routes/parties');
const offices = require('./api/routes/offices');

app.use('/api/v1/parties', parties);
app.use('/api/v1/offices', offices);


app.get('/', (req, res) => {
    // res.end(`<h1>Welcome to Politico</h1> ... your partner for credible elections`);
    res.sendFile('/ui/index.html');
})



module.exports = app;