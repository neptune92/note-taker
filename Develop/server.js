const express = require("express");
const fs = require("fs");
const path = require('path');

const app = express();

const PORT = process.env.PORT || 4001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});