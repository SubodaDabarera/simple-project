const express = require('express')

const app = express();

app.use('/', (req, res) => {
    res.send("Welcome to the Deployed page...! and hello...");
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("App is running on ", PORT)
})

module.exports = app;
