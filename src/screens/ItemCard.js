import React from "react";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
const ItemCard = (props) => {
  const { addItem } = useCart();
  const navigate = useNavigate();
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img src={props.img} className="card-img-top img-fluid" alt="" />
        <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <h4 className="card-text">₹ {props.price}</h4>

          <button
            className="btn btn-outline-dark mt-auto"
            onClick={() => addItem(props.item)}
          >
            Add to Cart
          </button>
          <button style={{marginLeft:"5px"}} className="btn btn-outline-dark mt-auto" onClick={() => navigate('/seereview',{state:{id:props.item}})}>see reviews</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
