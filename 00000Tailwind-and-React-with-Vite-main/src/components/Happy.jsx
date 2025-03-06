// using propTypes prop to define expected types and values.
import PropTypes from "prop-types";
function MyFunction(prop) {
  return (
    <div>
      <h1>hello i am {prop.className} and i m going to eat.</h1>
    </div>
  );
}
MyFunction.PropTypes = {
  className: PropTypes.string,
};
export default MyFunction;
