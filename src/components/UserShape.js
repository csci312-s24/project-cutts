// need authentication functionality to know who each user is

/*
    UserShape.js

    This provides a PropTypes shape descriptor of article objects. This is pulled out
    since multiple components take articles as props.
*/
import PropTypes from "prop-types";

const UserShape = PropTypes.shape({
  name: PropTypes.string,
  num: PropTypes.num,
  year: PropTypes.num,
  email: PropTypes.string,
});

export default UserShape;
