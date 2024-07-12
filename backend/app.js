const express = require("express");
const mongoose = require("./database/db"); // Assuming you have a db.js file for MongoDB connection
const corsMiddleware = require("./middlewares/corsMiddleware");
const errorMiddleware = require("./middlewares/errorMiddleware");
const dataRoutes = require('./routes/data');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3421;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(errorMiddleware);

app.use('/data', dataRoutes);

app.get("/", (req, res) => {
    return res.send(`<div style = "background:magenta;padding:100px;"><h2>Data Virtualization BE</h2>
    <p>Below are the some supported routes...</p>
        <div><ul>
            <li>GET all data from the database - /data</li>
            <li>GET data filtered by year - /data/year/:year</li>
            <li>GET data filtered by region - /data/region/:region</li>
            <li>Much more...</li>
        </ul></div>
    </div>`)
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
