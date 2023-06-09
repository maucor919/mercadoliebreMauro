let express = require('express');

let path = require('path');

let app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views','home.html'));
});

app.listen(process.env.PORT || 3000, () => { console.log('Servidor corriendo en el puerto 3000') });