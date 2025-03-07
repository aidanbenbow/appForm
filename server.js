import express from 'express';
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
    });



//write posted data to a file
import fs from 'fs'; 
app.post('/', (req, res) => {
    fs.appendFile('message.txt', JSON.stringify(req.body), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    res.render('submitted');
});

//read the file and display the content
app.get('/response', (req, res) => {
    fs.readFile('message.txt', 'utf8', function(err, data) {
        if (err) throw err;
        const jsonArray = JSON.parse(`[${data.replace(/}\s*{/g, '},{')}]`);
       
        res.render('response', {data: jsonArray});
    });
});


app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});