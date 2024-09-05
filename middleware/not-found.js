const notFound = (req, res) => {
    res.status(404).send(`<h1>Resource Not Found</h1><a href ="/">Go Home</a>`)
}
module.exports = notFound;