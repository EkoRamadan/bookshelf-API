const {addBookHandler} = require('./handler.js')

const routes = [
    {
        method: 'POST',
        path: '/',
        handler: addBookHandler,
    },
]

module.exports = routes