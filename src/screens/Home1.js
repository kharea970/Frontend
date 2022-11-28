import React from "react";
import ItemCard from "./ItemCard";
const Home1 = (props) => {
  // console.warn(data.productData);
    //setdata

  return (
    <>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {props.cardInfo.map((item, index) => {
            return (
              <ItemCard
                img={item.image}
                title={item.title}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home1;
