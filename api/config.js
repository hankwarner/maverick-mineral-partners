if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const config = {
    endpoint: "https://mavmp.documents.azure.com:443/",
    key: process.env.DB_KEY,
    databaseId: "mavmp"
};

module.exports = config;
