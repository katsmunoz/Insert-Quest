import React from "react";
import "./Order.css";
import Trash from "../images/delete.png";

const Order = (props) => (
  <div className="Order-detail">
    <h4>Resumen de Compra</h4>
    <form className="numberTable">
      <label className="numberTable">
        Número de mesa:
        <input className="number" type="text" name="name" />
      </label>
    </form>
    {props.car.map((item, index) => (
      <div className="order-items col-sm-10">
        <p>{item.name}</p>
        <p>{item.price}</p>
        <button
          onClick={() => props.removeItem(item, index)}
          className="icon-btn"
        >
          <img className="icon-delete" src={Trash} />
        </button>
      </div>
    ))}
    <button className="btn-send">Enviar</button>
  </div>
);

export default Order;
