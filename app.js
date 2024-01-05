const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    let nodeVer = [major, minor, patch] = process.versions.node

    res.status(200);
    res.send("Hello World!! Node version : " + nodeVer );
});

app.listen(PORT, () => console.log(`App listening on port ${PORT} `));