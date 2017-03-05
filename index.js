let express = require('express');
let app = express();
let upload = require('./upload.js');
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(3000, () => console.log('Server started'));

app.get('/', (req, res) => res.render('home'));

app.post('/signup', (req, res) => {//2222
    upload(req, res, (err) => {
        if(err) return res.send(err + '');
        res.send('Entered route');  
    });
});