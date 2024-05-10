import PropTypes from "prop-types";

const ProposedTripShape = PropTypes.shape({
  id: PropTypes.num.isRequired,
  proposer: PropTypes.integer.isRequired,
  timeFrame: PropTypes.string.isRequired,
  dest: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
});

export default ProposedTripShape;
