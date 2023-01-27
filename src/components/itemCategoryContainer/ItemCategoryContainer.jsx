import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import ItemCategory from '../itemCategory/ItemCategory';
import './ItemCategoryContainer.css'

const ItemCategoryContainer = (props) => {
  const params = useParams()
  const { categoryId } = params
 

  return (
    <div className="itemlistcontainer">
      <h3 className="itemlistcontainer-title">
      Este es la categoria {categoryId}
      </h3>
      <p>Filtrar categorias:</p>
      <div className="category-button-container">
        <Link to="/categoria/mens-clothing">
          <button  className="category-button">
            men's clothing
          </button>
        </Link>
        <Link to="/categoria/jewelery">
          <button className="category-button">
            jewelery
          </button>
        </Link>
        <Link to="/categoria/electronics">
          <button className="category-button">
            electronics
          </button>
        </Link>
        <Link to="/productos">
          <button className="category-button">
            x
          </button>
        </Link>
      </div>
      <ItemCategory categoryId={categoryId} />
    </div>
  );
}

export default ItemCategoryContainer