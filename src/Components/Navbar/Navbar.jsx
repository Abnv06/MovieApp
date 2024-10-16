import React, { useState } from "react";
import './Navbar.css'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getMovies } from "../Card/MoviesList";




const NavBar = ({ setData }) => {

   const navigate = useNavigate();

   const [searchTerm, setSearchTerm] = useState("")

   const filterByCatagory = (catagory) => {
      const filtermovie = getMovies.filter((movie) => movie.catagory === catagory)
      // console.log(filtermovie)
      setData(filtermovie)
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      navigate(`/search/${searchTerm}`)
      setSearchTerm("");
   }


   return (
      <div className="navbar">

         {/* <div onClick={()=>(setData(getMovies))}>MovieHub</div> */}

         <Link className='Logo' to={`/`}><div onClick={() => (setData(getMovies))}>MovieHub</div></Link>


         <form
            onSubmit={handleSubmit}
            className='Logo'>
            <input
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               type="text"
               placeholder="Search.." />
         </form>

         <div className="navbarMenu">
            <Link className='Logo' to={`/`}><div onClick={() => (setData(getMovies))}>Home</div></Link>
            <Link className='Logo' to={`/`}><div onClick={() => (filterByCatagory("comedy"))}>Comedy</div></Link>
            <Link className='Logo' to={`/`}><div onClick={() => (filterByCatagory("action"))}>Action</div></Link>
            <Link className='Logo' to={`/`}><div onClick={() => (filterByCatagory("horror"))}>Horror</div></Link>
         </div>

      </div>
   );

};

export default NavBar;