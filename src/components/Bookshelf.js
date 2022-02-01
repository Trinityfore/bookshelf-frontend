const Bookshelf = (props)=> {
    return(
        // invisible box
        <div className='box'> 


         {/* // main rectangle of bookshelf */}
        <div className='Bookshelf'></div>

        <div className='shadow'></div>

        {/* //individual shelfs */}
        <div className='topshelf'></div>

        <div className='lowshelf'></div>

        {/* different book shapes  */}
        <div className='shortbook'></div>

        <div className='tallbook'>  </div>

        <div className='flatbook'></div>

        <div className='leaningbook'></div>
        
        </div>
       

    )
}


export default Bookshelf; 