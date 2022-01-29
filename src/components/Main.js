import Index from '../pages/Index'

import { Route,Switch } from 'react-router-dom'
import { useState,useEffect } from 'react'

const Main = (props) => {
    const [ book, setBook] = useState(null)
}

const url = 'http://localhost:3001/bookshelf'

const getBook = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setBook(data);


return (
    <main>
        <Switch>
            <Route exact path='/'><Index book = { book }/></Route>
        </Switch>
    </main>
)



export default Main;}