const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const collectionName = 'jsondata';

router.get('/', async (req, res) => {
    try {
        const documents = await mongoose.connection.db.collection(collectionName).find({}).toArray();
        if (!documents || documents.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found"
            });
        }
        return res.status(200).json({
            success: true,
            message: "All Data",
            data: documents
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});

// Fetch data filtered by year
router.get('/year/:year', async (req, res) => {
    try {
        const { year } = req.params;

        // Validate year format
        if (!/^\d{4}$/.test(year)) {
            return res.status(400).json({
                success: false,
                message: "Invalid year format. Please provide a valid year in YYYY format."
            });
        }

        // Fetch documents matching the year
        const documents = await mongoose.connection.db.collection(collectionName).find({
            $or: [
                { start_year: parseInt(year) },
                { end_year: parseInt(year) },
                { published: { $regex: year, $options: 'i' } }, // Case-insensitive regex match
                { added: { $regex: year, $options: 'i' } } // Case-insensitive regex match
            ]
        }).toArray();

        // Handle no documents found
        if (!documents || documents.length === 0) {
            return res.status(404).json({
                success: false,
                message: `No data found for year ${year}`
            });
        }

        // Return successful response with data
        return res.status(200).json({
            success: true,
            message: `Filtered by year ${year}`,
            data: documents
        });

    } catch (err) {
        // Handle internal server error
        console.error("Error fetching data:", err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});


// Fetch data filtered by region
router.get('/region/:region', async (req, res) => {
    try {
        const { region } = req.params;
        if (region.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid region"
            });
        }

        const documents = await mongoose.connection.db.collection(collectionName).find({ region: { $regex: region, $options: 'i' } }).toArray();

        if (!documents || documents.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found"
            });
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by region: ${region}`,
            data: documents
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});

module.exports = router;
