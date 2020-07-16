const express = require('express');

const app = express();

const port = process.env.PORT || 4321;

app.use(express.static('public'));

app.listen(port, () => console.log(`Listening on http:\\localhost:${port}`));
