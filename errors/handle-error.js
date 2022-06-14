const { logErrors } = require("../log/logger")

const handleError = (err, req, res, next) => {
    logErrors(err.message);
    return res.status(400).json({
        msg: "bad request"
    })

}

module.exports = {
    handleError
}