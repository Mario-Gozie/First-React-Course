// Styling is Done in Three ways,
// 1) inline (great for styling small components),
// 2) external Css file (great for external styling) and
// 3) module. (prefered for individual components that has unique styles.)

// function Button() {
//   const styles = {
//     backgroundColor: "hsl(200, 100%, 50%)",
//     color: "white",
//     padding: "10px 20px",
//     borderRadius: "5px",
//     border: "none",
//     cursor: "pointer",
//   };
//   return <button style={styles}>Click me</button>;
// }

// export default Button;

function Button() {
  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  // const handleClick = () => console.log("OUCH!");
  // const handleClick2 = (name) => console.log(`${name} stop Clicking me`); // When a callback needs an arguement, it is adviceable to put the call back inside another fuction in the event listener (see below) if you don't do so, you will run on its own.

  // let count = 0;

  // const handleClick = (name) => {
  //   if (count < 3) {
  //     count++;
  //     console.log(`${name} you clicked me ${count} time/s`);
  //   } else {
  //     console.log(`${name} stop clicking me!`);
  //   }

  // TAKING A DEEPER LOOK INTO EVENTS
  const handleClick = (e) => {
    let output = (e.target.textContent = "Ouch! 😊");
    console.log(output);
  };

  // There is also the onDoubleClick event handler, you can also check it out.

  return (
    <button style={styles} onClick={(e) => handleClick(e)}>
      Click me 😊
    </button>
  );
}

export default Button;
