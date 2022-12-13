const validate_user = (req, res, next) => {
    const payload = req.body;
    if (payload.username !== "Hendar") {
        throw new Error("Username tidak terdaftar.")
    }
    next();
}

module.exports = validate_user;