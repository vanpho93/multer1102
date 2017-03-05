let express = require('express');
let app = express();

let multer = require('multer'); //1

let storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, './public');
    },
    filename: function (req, file, cb){
        cb(null, req.body.username + Date.now() + file.originalname);
    }
});

let upload = multer({storage}).single('avatar'); //1111

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(3000, () => console.log('Server started'));

app.get('/', (req, res) => res.render('home'));

app.post('/signup', (req, res) => {//2222
    upload(req, res, err => {
        console.log(req.body);
        res.send('Entered route');  
    });
});