const cors = require('cors');

const corsOptions = {
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;
