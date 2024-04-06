// need authentication functionality to know who each user is

/*
    ProposedTripShape.js

    This provides a PropTypes shape descriptor of article objects. This is pulled out
    since multiple components take articles as props.
*/
import PropTypes from "prop-types";
import UserShape from "./UserShape";

const PlannedTripShape = PropTypes.shape({
  id: PropTypes.num.isRequired,
  driver: UserShape.isRequired,
  departureTime: PropTypes.instanceOf(Date).isRequired,
  destination: PropTypes.string.isRequired,
  departureLocation: PropTypes.string.isRequired,
  seats: PropTypes.oneOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12).isRequired,
});

export default PlannedTripShape;
