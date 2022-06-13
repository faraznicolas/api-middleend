const express = require('express');
const cors = require('cors');

const config = require('./config');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/docs', require('./routes/docs'));
app.use('/api/search', require('./routes/search'));
app.use('/api/item', require('./routes/item'));

app.listen(config.port, () => {
    console.log('Corriendo servidor en puerto ', config.port);
});

module.exports = app;