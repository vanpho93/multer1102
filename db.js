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

// pool.connect((err, client, done) => {
//     if(err) return console.log(err + '');
//     client.query('SELECT * FROM "News"', (err, result) => {
//         done(err);
//         if(err) return console.log(err + '');
//         console.log(result.rows);
//     });
// });