import PropTypes from "prop-types";
import UserShape from "./UserShape";

const ProposedTripShape = PropTypes.shape({
  id: PropTypes.num.isRequired,
  proposer: UserShape.isRequired,
  timeFrame: PropTypes.string.isRequired,
  dest: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
});

export default ProposedTripShape;
