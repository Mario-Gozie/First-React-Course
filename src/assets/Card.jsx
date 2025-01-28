import profilePic from "./Marcus.jpeg";

function Card() {
  return (
    <div className="card">
      <img
        className="card-image"
        src={profilePic}
        alt="Mario's Profile picture"
      />
      <h2 className="card-title">Mario Gozie</h2>
      <p className="card-text">I am an IT student, I love coding</p>
    </div>
  );
}

export default Card;
