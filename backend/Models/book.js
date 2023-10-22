const mongoose = require('mongoose')

const bookschema = mongoose.Schema({
    img: {
        type: String, 
        require : true
    },
    title: {
        type: String, 
        require : true
    },
    author: {
        type: String, 
        require : true
    },
    description: {
        type: String, 
        require : true
    },
    rating: {
        type: Number, 
        require : true
    },
    liked: { type : Boolean }
})

module.exports.bookModel = mongoose.model('book',bookschema)