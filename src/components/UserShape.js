// need authentication functionality to know who each user is

/*
    UserShape.js

    This provides a PropTypes shape descriptor of article objects. This is pulled out
    since multiple components take articles as props.
*/
import PropTypes from "prop-types";

const UserShape = PropTypes.shape({
  id: PropTypes.num,
  name: PropTypes.string,
  num: PropTypes.string,
  year: PropTypes.string,
  email: PropTypes.string,
  googleId: PropTypes.string,
  hasCar: PropTypes.bool,
  carYear: PropTypes.string,
  carMake: PropTypes.string,
  carModel: PropTypes.string,
  carPlate: PropTypes.string,
});

export default UserShape;
