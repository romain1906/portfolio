const path = require('path');

module.exports = {
    // Other configuration options...
    resolve: {
        fallback: {
            "process": require.resolve("process/browser")
        }
    },
    // Other configuration options...
};