import React,{useState} from 'react';
import MoviesCard from './MoviesCard';
import AddModal from './AddModal';

const MovieList = ({movies,addMovie}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div className="row">
           {movies.map ((el,i) => <MoviesCard movie = {el} key={i}
          
           />)
          
           } 
           <div>
               <button onClick={handleShow}>Add</button>
               <AddModal addMovie={addMovie} show={show} handleClose={handleClose}/>

           </div>
        </div>
    )
}

export default MovieList
