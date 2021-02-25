import './App.css';
import React, {useState} from 'react';
import MoviesCard from './MoviesCard';
import MoviesList from './MovieList';
import Description from './description';
import { v4 as uuidv4 } from 'uuid';
import {BrowserRouter,Route} from 'react-router-dom'



import Search from './Search';
function App() {
const [movies,setMovies]=useState([
    {  id:uuidv4(),
      main_img:
      "https://www.wellsfilmcentre.co.uk/images/films/i2/wfc1002570.jpg",
    title:"fast and furious 8",
    duration:"2h 29min",
    date:"2017",
    rate:4,
    genre: "action",
    description:
    "After (Dom) and (Letty) spend their honeymoon and (Brian) and (Mia) retire from their games, a mysterious lady tries to lure Dom into the underworld, which means betrayal of his closest friends from his team, which puts the team to a test It is difficult for them to change everything they have witnessed before, and it takes them on a trip from the beaches of Cuba to the streets of New York",
    },
    {   id:uuidv4(),
      main_img:
      "https://i.ebayimg.com/images/g/IiUAAOSwr4VdeRbJ/s-l300.jpg",
    title:"John Wick: Chapter 3 - Parabellum ",
    duration:"2h 11min",
    date:"2019",
    rate:3,
    genre: "action",
    description:
    "John Wake escapes this time because he is being chased against the background of an open contract worth $ 14 million in exchange for his elimination, and because of his breaking a major rule, which is his killing of someone on the grounds of the Continental Hotel, and the murderer was among the people involved in this open contract, and John Wake has to work his way And he survives his life in the heart of New York City.",
    
    },
    {   id:uuidv4(),
      main_img:
      "https://images.newindianexpress.com/uploads/user/imagelibrary/2020/5/1/w900X450/cvbcvbk.jpg",
     title:"The Matrix",
    duration:"2h 18min",
    date:"2003",
    rate:5,
    genre: "action",
    description:
    "Neo becomes the last hope of mankind, as he is the only one capable of doing miracles, and Neo tries to save the city of Zion, which will soon fall under the siege of machines.",
    },
    ])
 
    const addMovie= (movie) => {
      setMovies(movies.concat(movie))
    }
    const [keyword,setKeyword] = useState("")
    const [newRate, setNewRate] = useState(1)
    const search =(text)=> {
      setKeyword(text);
    }
    const setRate =(rate) => {
      setNewRate(rate);
    }
  return ( 
    <BrowserRouter>
    <div className="container">
      <Search search={search} setRate={setRate} newRate={newRate}/>
     <MoviesList addMovie={addMovie} movies= {movies.filter(movie => movie.rate >= newRate && 
       movie.title.toLowerCase().includes(keyword.toLowerCase().trim()))}/>
    </div>
    <Route path="/description/:id" render= { (props) => <Description {...props} movies={movies}/>} />
    </BrowserRouter>
    
    
  );
}

export default App;
