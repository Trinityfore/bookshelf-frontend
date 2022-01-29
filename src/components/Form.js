import { format } from "node:path/posix";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Form = (props) => {
    const url = props.edit.isEditing ? `http://localhost:3001/bookshelf/${props.edit.bookToEdit._id}` : 'http://localhost:3001/bookshelf'
    const [ from, setForm ] = useState ({title:'', author:'', image:''})
    const history = useHistory();
    const handleChange=(evt)=>{
        setForm({...format,[evt.target.name]:evt.target.value})
    }

    const handleSubmit


}