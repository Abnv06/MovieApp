import React, { useEffect, useState } from 'react'
import { getMovies } from '../Card/MoviesList'  
import { useParams } from 'react-router-dom'
import Card from '../Card/Card'
import '../../index.css'





function MovieDetails() {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const [reletedMovies, setReletedMovies] = useState([])

  

  useEffect(() => {
    const moviedetails = getMovies.filter((movie) => movie.id == id)
    // console.log(moviedetails)
    setMovie(moviedetails[0])

    const reletedMovies = getMovies.filter((mov) => mov.catagory === movie.catagory)
    // console.log(reletedMovies)
    setReletedMovies(reletedMovies)

  }, [id, movie.catagory])





  return (
    <>

      <div key={movie.id} className="container con">

        <img src={movie.image} alt="" />
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p>{movie.vote_average}</p>
        <p>{movie.catagory}</p>
        <button>Playyyyy Movie</button>

      </div>

      <Card getMovies={reletedMovies} />
    </>
  )
}

export default MovieDetails;
