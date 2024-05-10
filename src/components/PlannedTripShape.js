import PropTypes from "prop-types";

const PlannedTripShape = PropTypes.shape({
  id: PropTypes.num.isRequired,
  driverID: PropTypes.integer.isRequired,
  departureTime: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  departureLocation: PropTypes.string.isRequired,
  seats: PropTypes.oneOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12).isRequired,
  message: PropTypes.string,
});

export default PlannedTripShape;
