import React, { useState } from "react";

function MyComoponent() {
  // USE STATE IS USED IN GIVING VALUE TO SOMETHING, THEN CHANGING IT LATER. IT USUALLY CONTAINS THE VALUE AND THE SET FUNCTION FOR RESETTING THE VALUE. WHICH CN BE SEEN IN THE DESTRUCTURING PART DURING DECLARATION. THE USE STATE FUNCTION CAN ALSO TAKE AN INITIAL STATE.
  const [name, setName] = useState("Guest"); // use State function that would with an initial state of of Guest. then the main value is name and the setName function is used to reset its value. normal variables don't that's why UseState is used in most cases.

  const [age, setAge] = useState(0); //Incrementing age on the DOM

  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    // This is the call back function that runs the setName function anytime the set Name button is clicked
    setName("spongbob");
  };

  const incrementAge = () => setAge(age + 1); // Use State is used to update something on the DOM

  const toggleEmpledStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>
      <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmpledStatus}>Tooggle status</button>
    </div>
  );
}

export default MyComoponent;
