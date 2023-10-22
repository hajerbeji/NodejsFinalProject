import axios from 'axios'
import React, { useState } from 'react'

const PlusModal = ({setopenPlusModal}) => {
    const savebook = async() => {
        try{
            const bookToAdd = {
                title : addBook.title,
                author : addBook.author,
                img : addBook.img,
                description : addBook.description,
                rating : addBook.rating 
            }
        
            const response = await axios.post("http://localhost:3009/add",bookToAdd);
            if (response.status == 201) {
                console.log("Book added succesfully")
                setaddBook({
                    title: "",
                    author: "",
                    description: "",
                    img: "",
                    rating: parseInt(""),
                });
                setopenPlusModal(false);
            }
        }
        catch(error){
            console.log(error)
        }
    }
    const [addBook, setaddBook] = useState({title: "", author: "", description:"", img:"" ,rating: 0 })
    return (
        <div className='plus_modal'>
            <div className="plus_modal_box">
                <span>
                    <input type="text" name="" id="" placeholder='Title' onChange={e=>setaddBook({... addBook, title :e.target.value})} />
                    <input type="text" name="" id="" placeholder='Author' onChange={e=>setaddBook({... addBook, author :e.target.value})} />
                    <input type="text" name="" id="" placeholder='Description' onChange={e=>setaddBook({... addBook, description :e.target.value})} />
                    <input type="text" name="" id="" placeholder='Book Poster' onChange={e=>setaddBook({... addBook, img :e.target.value})} />
                    <input type="number" name="" id="" placeholder='Rating'onChange={e=>setaddBook({... addBook, rating :e.target.value})} />
                </span>
                <div className="btnss">
                    <button className='cancel' onClick={()=> setopenPlusModal(false)}>Cancel</button>
                    <button className='confirm' onClick={savebook}>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default PlusModal
