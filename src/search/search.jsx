import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Components/Card/Card';
import { getMovies } from '../Components/Card/MoviesList';

function SearchItem() {
  const { term } = useParams();
  const [filterData, setfilterData] = useState([]);

  useEffect(() => {
    const filteredData = () => {
      const data = getMovies.filter((movie) =>
        movie.title.toLowerCase().includes(term.toLowerCase())
      );
      setfilterData(data);
    };

    filteredData();
  }, [term]);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#f4f4f9',
    minHeight: '100vh',
  };

  const headerStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const resultsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    width: '100%',
    maxWidth: '1200px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>
        Results for "{term}"
      </h1>
      <div style={resultsStyle}>
        <Card getMovies={filterData} />
      </div>
    </div>
  );
}

export default SearchItem;
