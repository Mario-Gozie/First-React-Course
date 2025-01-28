// Data from the app is stored in the props object
// boolean values are handled with tenary operators.

// props = read-only properties that are shared between components. A parent can send data to a child component. <Component key=value/>

// propTypes = Mechanism that ensures that the passed value is of correct datatype.
// eg. age: PropTypes.number

// Default Props are default properties when you do not pass in a value

import PropTypes from "prop-types";

function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name} </p>
      <p>Age: {props.Age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

// Creating proptypes

Student.protoTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};

export default Student;
