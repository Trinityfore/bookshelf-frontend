import Index from '../pages/Index'
import Show from '../pages/Show'
import Form from './Form'
import Bookshelf from './Bookshelf'
import { Route,Switch } from 'react-router-dom'
import { useState,useEffect } from 'react'

const Main = (props) => {
    const [ book, setBook] = useState(null)
    const [ edit, setEdit ] = useState({
        isEditing:false,
        bookToEdit:null,
    })

    const url = 'https://trinitys-library.herokuapp.com/bookshelf/'

const getBook = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setBook(data);
}
    const handleEdit = (id) => {
        const bookToEdit = book.find((b) => b._id === id)
        setEdit({
            isEditing:true,
            bookToEdit
        })
    }

    const deleteBook = async (id)=> {
        await fetch(`${url}/${id}`,{
             method: "DELETE",
         });
         getBook();
     }


    useEffect(()=>{
        getBook()
    }, [])


return (
    <main>
        
        <Switch>
            <Route exact path='/'><Index book = { book }/></Route>
            <Route exact path='/landing'><Bookshelf/></Route>
            <Route path='/bookshelf/:id' render={(renderProps) => {
                return <Show deleteBook = { deleteBook } book = { book }{...renderProps} handleEdit = { handleEdit } />
             }} />
             </Switch>
        <Form getBook = { getBook } edit = { edit } setEdit = { setEdit }/>
    </main>

)}





export default Main;