import PropTypes from "prop-types";
import UserShape from "./UserShape";

const PlannedTripShape = PropTypes.shape({
  id: PropTypes.num.isRequired,
  driver: UserShape.isRequired,
  departureTime: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  departureLocation: PropTypes.string.isRequired,
  seats: PropTypes.oneOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12).isRequired,
  message: PropTypes.string,
});

export default PlannedTripShape;
