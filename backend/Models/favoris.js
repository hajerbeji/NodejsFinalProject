const mongoose = require('mongoose');

const favoriteBookSchema = new mongoose.Schema({
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
    }
});

const FavoriteBookModel = mongoose.model('FavoriteBook', favoriteBookSchema);

module.exports = FavoriteBookModel;
