const express = require('express');

//express app
const app = express();

//listen for requests
app.listen(3000, () => {
    console.log('Listening on port 3000');
});

app.get('/', (req, res) => {
    res.sendFile('./html/index.html', { root: __dirname });
});

// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./html/404.html', { root: __dirname });
});