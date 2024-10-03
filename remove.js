// remove.js
const fs = require('fs');
const path = require('path');

// Directory path
const logDir = path.join(__dirname, 'Logs');

// Check if Logs directory exists
if (fs.existsSync(logDir)) {
    // List and remove all log files
    fs.readdirSync(logDir).forEach(file => {
        const filePath = path.join(logDir, file);
        fs.unlinkSync(filePath);
        console.log(`Deleted file: ${file}`);
    });

    // Remove the Logs directory
    fs.rmdirSync(logDir);
    console.log('Logs directory removed.');
} else {
    console.log('Logs directory does not exist.');
}
