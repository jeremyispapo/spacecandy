import React from "react";
import {RenderCandy} from '../../utils/renderCandy'
import './Card.css'

export const Card = ({type,color, price, title, desc,setCarrito, carrito}) => {
  function addCar() {
    let newCar = {
      title,
      price,
    }
    carrito.push(newCar)
    setCarrito(carrito)
    console.log(carrito)
  }

  return (
    <div className="card">
      <div className="card__figure">
        <div className="card__img">
          <RenderCandy type={type} color={color} />
        </div>
        <span className="card__price">$ {price}</span>
      </div>
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__desc">{desc}</p>
		<button 
      onClick={addCar}
      className="card__button">Añadir al Carrito 🛒</button>
      </div>
    </div>
  );
};
