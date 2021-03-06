/**
 * Api root
 */
// @ts-nocheck
require('dotenv').config();

const { express, app, ReadStream, Pool, staticApp, idx } = require('./init')


Pool().query('select now()')
    .then(res => console.log(res.rows[0].now, 'CONNECTED TO DB'))
    .catch(err => {
        console.log('NOT CONNECTING TO DB:', err)
        process.exit(400)
    })

app.all('*', (req, res, next) => {
    console.log('PATH: ', req.path.startsWith('/ta'), req.path);
    // console.table(Object.entries(req.headers).forEach(h=>console.log('key:',h[0],'value:',h[1])));
    if (req.path === '/' && req.path) res.redirect('/ta');
    if (!req.path.startsWith('/ta') && !req.path.startsWith('/api')) res.status(202).redirect('/ta' + req.path);
    next()
})

app.use('/ta', express.static(staticApp));

app.get('/ta', (req, res) => ReadStream(idx).pipe(res));

app.get('/api/test', (req, res) => {
    console.log('req.query: ', req.query);
    new Pool().query('select now()')
        .then(result => res.status(500).send(result))
        .catch(err => res.status(500).send(err))
})

// module.exports = app;

app.listen(8080, () => console.log('Running Locally'))