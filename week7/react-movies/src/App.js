// import React, { useState } from 'react';
import { React, useState } from 'react';

function Movie(props) {
  return (
    <div className="col-sm-3 text-center mb-2 poster">
      <img src={'http://image.tmdb.org/t/p/w185' + props.poster_path} className="img-fluid" alt={props.title} />

      <p className="mt-2">
        {props.release_date ? props.release_date.substr(0, 4) : null}
        <span className="badge bg-primary mx-3">
          {props.vote_average.toFixed(1)}
        </span>
        <LikeButton clicked={props.liked} counter={props.likes} key={props.title}/>
      </p>
    </div>
  )
}

function LikeButton(props) {
  
  //useState a function from React and return an array, first element is state 
  // the second is a function to change the state, input 0 is the default, then will be updated
  // const [counter, setCounter]  = useState(0) 

  function handleClick(event) {
    event.preventDefault()
    props.clicked({ props.title: props.couner + 1})
    // setCounter(counter + 1)
  }


    return (
      <button onClick={handleClick} className="text-decoration-none btn text-danger ">&hearts; <span>{props.counter}</span></button>
    )
}

function App() {

  function handleTopRated(props) {
    const url = urlForMovies("top_rated")
    fetch(url).then((r) => r.json()).then((internet_data) => setData(internet_data.results))
  }

  function handleNowPlaying(props){
    const url = urlForMovies("now_playing")
    fetch(url).then((r) => r.json()).then((internet_data) => setData(internet_data.results))
  }


  const initialData = [
    { title: "The Princess Bride", poster_path: '/dvjqlp2sAhUeFjUOfQDgqwpphHj.jpg', release_date: '1999', vote_average: 10 },
    { title: "Spider - Man", poster_path: '/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg', release_date: '1999', vote_average: 10 },
    { title: "Star Wars", poster_path: '/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg', release_date: '1999', vote_average: 10 },
    { title: "Jurassic Park", poster_path: 'https://image.tmdb.org/t/p/w185//b1xCNnyrPebIc7EWNZIa6jhb1Ww.jpg', release_date: '1993', vote_average: 10 },
    { title: "Doctor Strange", poster_path: '/7WfK17BXE6szXlm4WOxfswgbdsL.jpg', release_date: '1999', vote_average: 10 },
    { title: "Apollo 13", poster_path: '/kzj95o9FlVxKziQq36mjES3wxel.jpg', release_date: '1999', vote_average: 10 },
    { title: "The Matrix", poster_path: '//f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg', release_date: '1999', vote_average: 10 },
    { title: "Toy Story", poster_path: '/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg', release_date: '1999', vote_average: 10 },
  ]

  const [likes, setLikes] = useState( {} )
  const [data, setData] = useState(initialData)

  const movies = data.map(movie_data => <Movie liked={setLikes} likes={likes[movie_data.title] || 0} key={movie_data.title} title={movie_data.title} release_date={movie_data.release_date} poster_path={movie_data.poster_path} vote_average={movie_data.vote_average} />)

  return (
    <div>
      <header className="row mb-5 justify-content-between">
        <form className="col-sm-4">
          <input className="form-control" autoFocus name="search" type="text" placeholder="Search by title...">
          </input>
        </form>

        <p className="mt-2">
          <button onClick={handleTopRated} className="btn btn-primary" >Top-Rated Movies</button>
          <button onClick={handleNowPlaying} className="btn btn-primary ms-3">Now Playing</button>
        </p>
      </header>

      <div className="row justify-content-between flex-wrap gy-5" id="movies">
        {movies}
      </div>
    </div>
  )
}

// Pass in the resource you want to retrieve: 'top_movies' or 'now_playing'
function urlForMovies(resource) {
  const apiKey = "api_key=bde024f3eb43f597aafe01ed9c9098c6"
  const language = "language=en-US"
  const region = "region=US"
  const filter = "include_adult=false"
  const base_url = `https://api.themoviedb.org/3/movie/${resource}`
  return `${base_url}?${apiKey}&${language}&${region}&${filter}`
}

// Pass in the movite title or keyword to search for
function urlForSearch(keyword) {
  const apiKey = "api_key=bde024f3eb43f597aafe01ed9c9098c6"
  const language = "language=en-US"
  const search = `query=${keyword}`
  const region = "region=US"
  const filter = "include_adult=false"
  const base_url = `https://api.themoviedb.org/3/search/movie`
  return `${base_url}?${apiKey}&${search}&${language}&${region}&${filter}`
}

export default App;

// To make development easier, we can make certain functions available to the browser
// by adding a reference into the built-in window object
window.urlForMovies = urlForMovies
window.urlForSearch = urlForSearch