const express = require('express'),
    app = express(),
    path = require('path');

const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, ()=> {
    console.log(`Server is running in port: ${3000}`);
});