let express = require('express');
let app = express();

let pg = require('pg');

let config = {
  user: 'postgres',
  database: 'NODE1102',
  password: 'khoapham',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 1000
}

let pool = new pg.Pool(config);

let upload = require('./upload.js');
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(3000, () => console.log('Server started'));

app.get('/', (req, res) => {
    pool.connect((err, client, done) => {
        if(err) return res.send(err + '');
        client.query('SELECT * FROM "News"', (err, result) => {
            done(err);
            if(err) return res.send(err + '');
            res.send(result.rows);
        });
    });
    //function queryDB(sql, cb)
});

app.post('/signup', (req, res) => {//2222
    upload(req, res, (err) => {
        if(err) return res.send(err + '');
        res.send('Entered route');  
    });
});