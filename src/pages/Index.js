import { Link } from 'react-router-dom';

const Index = (props) => {
    console.log(props.book)
    const loaded = () => {
        return (
            <div>
                {props.book.map((b)=>{
                    return(
                        <Link key={b._id} to = {`/bookshelf/${b._id}`}>
                            <div>
                                {b.title}
                            </div>
                        </Link>
                    )
                })}


            </div>
        )
    }
    const loading = () => {
        return <h1> loading... </h1>

    }
    return props.book ? loaded() : loading()
};

export default Index;