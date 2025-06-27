const fs = require('fs');


const loggerMiddleware = (req, res, next)=>{
const date = new Date();

    const logMessage = `Date: ${date}, Method: ${req.method}, IP Address: ${req.ip}, URL: ${req.url}\n`;
    fs.appendFile('./public/logs.txt', logMessage, err =>{
        if (err) {
            console.error('Error writing to log file:', err);
        } else {
            console.log('Log message written successfully');
        }
    } )


    next();

}

module.exports = loggerMiddleware