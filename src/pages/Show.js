const Show = props => {
    const id = props.match.params.id
    const book= props.book.find((b)=>b._id === id)

    console.log("hello world", book)
const handleClick = () => {
    props.history.push('/')
}

return <div>
    <h1>{book.title}</h1>
    <h2>{book.author}</h2>
    {book.image && <img alt={book.title} src={book.image}/>}
    <button onClick= {handleClick}>Delete</button>
        <button onClick = {()=>props.handleEdit(book._id)}>Edit</button>
</div>

};
export default Show;

