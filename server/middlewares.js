function notFound(req, res, next) {
    res.status(404)
    const error = new Error(`🔍 - Not Found - ${req.originalUrl}`)
    next(error)
}

function logError(err, req, res, next) {
    console.log(err.message)
    next(err)
}

function errorHandler(err, req, res, next) {
    res.status(res.statusCode || 500)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack
    })
}


module.exports = {
    notFound,
    logError,
    errorHandler
}