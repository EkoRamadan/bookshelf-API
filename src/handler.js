const books = require('./books.js')
const ids = Math.random()
const addNoteHandler = (request, h)=>{
    const {name,author} = request.payload
    const createdAt = new Date().toISOString()
    const updateAt = createdAt
    // const id = nanoid(16)
    const id = ids
    const newNote = {
        name,author,id,createdAt,updateAt
    }

    books.push(newNote)

    const isSuccess = books.filter((note) => note.id === id).length > 0

    if(isSuccess){
        const response = h.response({
            status: 'success',
            message: 'Catatan berhasil ditambahkan',
            data: {
                bookId: id,
            }
        })
        response.code(201)
        return response
    }
    const response = h.response({
        status: 'fail',
        message: 'catatan gagal ditambahkan',
    })
    response.code(500)
    return response
}

const getAllNotesHandler = () => ({
    status: 'success',
    data: {
      books,
    },
  });

module.exports = {addNoteHandler,getAllNotesHandler}