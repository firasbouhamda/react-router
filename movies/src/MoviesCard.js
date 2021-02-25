import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom'

const MoviesCard = ({movie}) => {
    return (
        <div class="movie_card" id="tomb">
  <div class="info_section">
    <div class="movie_header" style={{backgroundImage:`url(${movie.second_img})`}}>
      <img class="locandina" src={movie.main_img}/>
      <h1>{movie.title}</h1>
      {/* <h4>{movie.date}</h4>
      <StarRatingComponent 
          name="rate1" 
          starCount={5}
           value={movie.rate}
        /><br/>
      <p class="type">{movie.genre}</p>
    </div>
    <div class="movie_desc">
      <p class="text">
          {movie.description}
      </p> */}
              <Link to={`/description/${movie.id}`}>Movie description</Link>  

    </div>



  </div>
  <div class="blur_back tomb_back"></div>
  <div>  
  
  </div>    
</div>
    )
}

export default MoviesCard
