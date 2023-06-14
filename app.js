let express = require('express');

let path = require('path');

let app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

/*app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'register.html'));
});*/

const PORT = process.env.PORT || 4000
app.listen(PORT, () => { console.log('Servidor corriendo en el puerto' + PORT) });