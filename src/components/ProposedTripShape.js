import PropTypes from "prop-types";
import UserShape from "./UserShape";

const ProposedTripShape = PropTypes.shape({
  id: PropTypes.num.isRequired,
  proposer: UserShape.isRequired,
  departureTime: PropTypes.instanceOf(Date).isRequired,
  destination: PropTypes.string.isRequired,
});

export default ProposedTripShape;
