const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');


app.set('port',  3000);

app.use(cors({ origin: ['http://localhost:4200'] }));

app.use(express.json());

app.use(morgan('dev'));

app.use('', require('./routes/jikan'));

app.listen(app.get('port'), () => {
    console.log("servidor on", app.get('port'));
});