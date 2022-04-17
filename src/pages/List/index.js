import React from "react";
import Car from "../../components/Car/car";
import { useSelector } from "react-redux";

const List = () => {
  const cars = useSelector((state) => state.cars);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {cars.map((car, index) => (
            <Car key={index} car={car} />
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
