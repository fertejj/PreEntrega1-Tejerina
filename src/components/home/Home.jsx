import React from 'react'
import "./Home.css"
import '../carousel/Carousel.css'
import UncontrolledExample from '../carousel/Carousel'
import ItemHomeContainer from '../itemHomeContainer/ItemHomeContainer'

const Home = () => {
  return (
    <div id="home">
      <UncontrolledExample />
      <ItemHomeContainer />
    </div>
  )
}

export default Home