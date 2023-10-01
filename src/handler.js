const {books} = require('./books.js')

const addBookHandler = (request, h)=>{
    const {
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading
    } = request.payload
    const createdAt = new Date().toISOString()
    const updateAt = createdAt
    const id = "iugiugyy"

    const newBook = {
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
        id,
        createdAt,
        updateAt
    }
    books.push(newBook)

    const isSuccess = books.filter((book)=> book.id === id).length > 0

    if(isSuccess){
        if(name === '' || name === undefined ){
            const response = h.response({
                status: 'fail',
                message: 'Gagal menambah buku, mohon isi nama buku',
            })
            response.code(400)
            return response
        }else if(readPage > pageCount){
            const response = h.response({
                status: 'fail',
                message: 'Gagal menambah buku, readPage tidak boleh lebih besar dari pageCount',
            })
            response.code(400)
            return response
        }else{
            const response = h.response({
                status: 'success',
                message: 'Buku berhasil ditambahkan',
                data: {
                    bookId: id,
                }
            })
            response.code(201)
            return response
        }
    }
}

module.exports = {addBookHandler}