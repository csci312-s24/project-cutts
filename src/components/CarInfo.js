/*
  Displays the information of a car

  props:
    car - the AppUser's car
*/
import PropTypes from "prop-types";

export default function CarInfo({ car }) {
  return (
    <div>
      <h2>Car Info: </h2>
      <ul>Year: {car.year}</ul>
      <ul>Make: {car.make}</ul>
      <ul>Model: {car.model}</ul>
      <ul>Plate: {car.plate}</ul>
    </div>
  );
}

const CarInfoShape = PropTypes.shape({
  year: PropTypes.number.isRequired,
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  plate: PropTypes.string.isRequired,
});

CarInfo.propTypes = {
  car: CarInfoShape,
};
