// CONDITIONAL RENDERING
import propTypes from "prop-types";

function UserGreeting(props) {
  // if (props.isLoggedIn) {
  //   return <h2>Welcome {props.username}</h2>;
  // } else {
  //   return <h2>Please log in to continue</h2>;
  // }

  // return props.isLoggedIn ? (
  //   <p className="welcome-message">Welcome {props.username}</p>
  // ) : (
  //   <p className="login-prompt">Please Login to continue</p>
  // );

  const welcomeMessage = (
    <p className="welcome-message">Welcome {props.username}</p>
  );

  const loginPrompt = <p className="login-prompt">Please Login to continue</p>;

  return props.isLoggedIn ? welcomeMessage : loginPrompt;
}
// PROPS DATATYPE

UserGreeting.propType = {
  isLoggedIn: propTypes.bool,
  username: propTypes.string,
};

// PROPS DEFAULT VALUES

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};

export default UserGreeting;
