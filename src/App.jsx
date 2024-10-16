import './App.css'
import Home from './Components/Home/Home'
import NavBar from './Components/Navbar/Navbar'
// import Comedy from './Components/Comedy/Comedy'
// import Action from './Components/Action/Action'
// import Horror from './Components/Horror/Horror'
import Card from './Components/Card/Card'
import { getMovies } from './Components/Card/MoviesList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MovieDetails from './Components/MovieDetails/MovieDetails'
import { useState } from 'react'
import SearchItem from './search/search'

function App() {

  const [data, setData] = useState([...getMovies])


  return (
    <>
      <Router>
        <NavBar setData={setData} />
        <Routes>
          <Route path="/" element={<Card getMovies={data} />} />
          <Route path="/card/:id" element={<MovieDetails />} />
          <Route path="/search/:term" element={<SearchItem />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App




{/* <Router>
<NavBar cart={cart} setData={setData}/>
<Routes>
  <Route path="/" element={<Product cart={cart} setCart={setCart} items={data}/>} />
  <Route path="/product/:id" element={<ProductDetails cart={cart} setCart={setCart}/>} />
  <Route path="/search/:term" element={<SearchItems cart={cart} setCart={setCart}/>} />
  <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
</Routes>

</Router> */}










{/* <Route path="/Comedy" element={<Comedy />} /> */ }
{/* <Route path="/Horror" element={<Horror />} /> */ }
{/* <Route path="/Action" element={<Action />} />  */ }