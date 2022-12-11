const checkMethod = (req, res, next) => {
    console.log("INI Adalah Middlerware router endpoint");
    next();
} 

module.exports = checkMethod;