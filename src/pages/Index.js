import { Link } from 'react-router-dom';

const Index = (props) => {
    const loaded = () => {
        return (
            <div>
                {props.books.map((b)=>{
                    return(
                        <Link key={b._id} to = {`/bookshelf/${b._id}`}>
                            <div>
                                {b.name}
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