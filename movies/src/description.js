import React,{useState,useEffect} from 'react'
import StarRatingComponent from 'react-star-rating-component';
const Description = (props) => {
    console.log(props)
    const [movie,setMovie] = useState(null)
    useEffect(  ()=> { setMovie( props.movies.filter ( el => el.id === props.match.params.id)[0])})
    return (
<div>
    { movie && ( < div className='col-6 movie-card'>
            <div className="right_side" style={{backgroundImage:`url(${movie.second_img})`}}/>
            <div className="left_side">
               <div className="left_side_inner">
                <img src={movie.main_img}/>
                <div >
                    <h1>{movie.title}</h1>
                    <p>{movie.duration}</p>
                    <p>{movie.date}</p>
                    <p>{movie.genre}</p>
                    <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rate}
        />
                </div>
            </div> 
            <div>
            <p>{movie.description}</p>
            </div>
            </div>
            
        </div>)}
</div>
    )
}

export default Description
