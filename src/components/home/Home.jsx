import React from 'react'
import "./Home.css"
import '../carousel/Carousel.css'
import UncontrolledExample from '../carousel/Carousel'
import ItemHomeContainer from '../itemHomeContainer/ItemHomeContainer'
import Loader from '../loader/Loader'

const Home = () => {
  return (
    <div id="home">
      <Loader/>
      <UncontrolledExample />
      <ItemHomeContainer />
    </div>
  )
}

export default Home