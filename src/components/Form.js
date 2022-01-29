import { format } from "node:path/posix";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Form = (props) => {
    const url = props.edit.isEditing ? `http://localhost:3001/bookshelf/${props.edit.bookToEdit._id}` : 'http://localhost:3001/bookshelf'
    const [ from, setForm ] = useState ({title:'', author:'', image:''})
    const history = useHistory();
    const handleChange=(evt)=>{
        setForm({...format,[evt.target.name]:evt.target.value})
    }

    const handleSubmit = async(evt) => {
        evt.preventDefault()
        await fetch(url,{
            method: props.edit.isEditing ? 'PUT':'POST',
            headers: {
                "Content-type": "application/json"
            },
            body:JSON.stringify(form)
        })
        props.getBook()
        props.setEdit({
            isEditing:false,
            bookToEdit:null,
        })
        setForm({title:'', author:'', image:''})
        history.push('/')
    }

    useEffect(() => {
        if(props.edit.isEditing){
            setForm(props.edit.bookToEdit)
        }
    }, [props.edit])

    return(
        <form onSubmit={handleSubmit}>
        <input name="title" onChange={handleChange} value={form.title}/>
        <input name="author" onChange={handleChange} value={form.author}/>
        <input name="image" onChange={handleChange} value={form.image}/>
        <button type="submit">Submit</button>
        </form> 

    )

}

export default Form;