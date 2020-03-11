const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const consoleList = ["nes", "gb", "snes", "n64", "gbc", "gba", "gc", "nds", "3ds", "wiiu", "ps1", "ps2", "psp", "pc", "atari", "sg", "sms"];

var db = require('./models/GameModel.js');

app.get('/api/:console', (req, res) => {
    if (consoleList.indexOf(req.params.console) != -1) {
        db.all(req.params.console, (data) => {
            res.json(data);
        })
    }
});

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Listening on port ${port}`));