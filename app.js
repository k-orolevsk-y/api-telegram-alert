require("dotenv").config();
const http = require("http")
const express = require("express");
const bodyParser = require("body-parser");
const errors = require("celebrate").errors
const cors = require("cors")
const routes = require("./routes");

const { PORT = 8080 } = process.env;

const app = express();

app.use(cors({ origin: "*" }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

app.use(errors())
app.use((err, req, res, _) => {
    const { statusCode = 500, message } = err;

    res.status(statusCode)
        .send({
            statusCode: statusCode,
            error: http.STATUS_CODES[statusCode],
            message: statusCode === 500 ? 'An unknown error occurred on the server, please try again later.' : message,
        });
})

app.listen(PORT, () => {
    console.log("Server success started on port: ", PORT)
})