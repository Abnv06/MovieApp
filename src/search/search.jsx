import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from '../Components/Card/Card';
import { getMovies } from '../Components/Card/MoviesList';

function SearchItem() {

    const {term} = useParams();
    const [filterData, setfilterData] = useState([])

    

    useEffect(() => {
      
        const filteredData = () => {
            const data = getMovies.filter((movie) => movie.title.toLowerCase().
            includes(term.toLowerCase()));
            // console.log(data)
            setfilterData(data)
        }

        filteredData()
      
      
    }, [term])
    


  return (
    <Card getMovies={filterData}/>
  )
}

export default SearchItem;