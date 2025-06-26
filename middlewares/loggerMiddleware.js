
const loggerMiddleware = (req, res, next)=>{
const date = new Date();

    console.log(`Date: ${date}, Method: ${req.method}, URL: ${req.url}}`);
    next();

}

module.exports = loggerMiddleware