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

function fileFilter (req, file, cb) {
    if(file.mimetype === 'image/png' 
        || file.mimetype === 'image/jpg'){
        return cb(null, true);
    }
    cb(new Error('Sai dinh dang file'));
}

let upload = multer({
    storage, 
    limits: {fileSize: 5 * 1024},
    fileFilter
}).single('avatar'); //1111

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