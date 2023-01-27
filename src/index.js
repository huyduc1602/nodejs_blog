import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import morgan from 'morgan';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename) + '/resoures/views';
const __public = path.dirname(__filename) + '/public';

app.use(express.static(__public));
//HTTP Logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', engine({
    extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/news', (req, res) => {
    res.render('news');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})