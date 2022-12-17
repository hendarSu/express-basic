const logHeaders = (req, res, next) => {
    const token = req.headers["x-api-key"];
    if (token !== "iniToken") {
        res.status(401).json({
            status: "fail",
            message : "Tidak Diijinkan, token salah!"
        })
    };

    next();
}

module.exports = logHeaders;