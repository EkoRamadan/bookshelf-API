const {addNoteHandler,getAllNotesHandler} = require('./handler.js')

const routes = [
    {
        method: 'POST',
        path: '/',
        handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/',
        handler: getAllNotesHandler
    }
]

module.exports = routes