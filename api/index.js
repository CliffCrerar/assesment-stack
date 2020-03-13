/**
 * Api root
 */
// @ts-nocheck
require('dotenv').config();
const
    express = require('express'),
    app = express(),
    { ReadStream } = require('fs'),
    { resolve,join } = require('path'),
    { Pool } = new require('pg'),
    staticApp = resolve('build'),
    idx = join(staticApp,'index.html');

app.use('/',express.static(staticApp));

app.get('/', (req, res) => ReadStream(idx).pipe(res));

app.get('/api/test', (req, res) => {
    console.log('req.query: ', req.query);
    new Pool().query('select now()')
        .then(result => res.status(500).send(result))
        .catch(err => res.status(500).send(err))
})

module.exports = app;