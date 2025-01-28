// onChange = event handler used primarily with form elements. for example, <input>, <textarea>, <select>, <radio> Triggers a function every time the value of the input changes.

import React, { useState } from "react";

function MyOnChangeComponent() {
  const [name, setName] = useState("Guest"); // For Changing Name or strings in real time. remember that use functions can have initial value which is Guest in this case.

  const [quantity, setQuantity] = useState(1); //For changing Numbers in real time. remember that use functions can have initial value which is 1 in this case.

  function handleNameChange(event) {
    //For changing Name in real time
    setName(event.target.value);
  }
  function handleQuantityChange(event) {
    setQuantity(event.target.value); // for changing Number in real time
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>name: {name}</p>
      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <p>Quantity: {quantity}</p>
    </div>
  );
}

export default MyOnChangeComponent;
