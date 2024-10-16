import React from 'react'
import './Card.css'
// import { getMovies } from './MoviesList'
import { Link } from 'react-router-dom'



function Card({ getMovies }) {


  return (

    <>
      <div className="moviebox">
        {

          getMovies.map((movie, key) => {
            return (
              <>

                <div key={movie.id} className="container">
                    <Link to={`/card/${movie.id}`}>
                      <img src={movie.image} alt="" /></Link>
                  <h1>{movie.title}</h1>
                  <p>{movie.overview}</p>
                  <p>{movie.vote_average}</p>
                  <p>{movie.catagory}</p>

                </div>


              </>
            )
          })

        }
      </div>



    </>


  )
}

export default Card;



{/* <div className="container">
<img src="" alt="" />
<h1>{}</h1>
<p>overview</p>
<p>vote_average</p>
</div> */}

