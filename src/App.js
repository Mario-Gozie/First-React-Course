// import Card from "./assets/Card";

// function App() {
//   return (
//     <>
//       {" "}
//       <Card />
//       <Card />
//     </>
//   );
// }

// export default App;
// import Button from "./assets/button";

// function App() {
//   return <Button />;
// }

// export default App;

// import Student from "./assets/Student.jsx";

// function App() {
//   return (
//     <>
//       <Student name="Spongebob" Age={30} isStudent={true} />
//       <Student name="Patrick" Age={42} isStudent={false} />
//       <Student name="Squidward" Age={50} isStudent={false} />
//       <Student name="Sandy" Age={27} isStudent={true} />
//       <Student />
//     </>
//   );
// }

// export default App;

// import UserGreeting from "./UserGreeting.jsx";

// function App() {
//   return (
//     <>
//       <UserGreeting isLoggedIn={true} username="Chigozirim" />
//     </>
//   );
// }

// export default App;

// import List from "./List";

// function App() {

//   return (
//     <>
//       <List />
//     </>
//   );
// }

// export default App;

// PASSING LIST AS PROPS

// import List from "./List";

// function App() {
//   const fruits = [
//     { id: 1, name: "apple", calories: 95 },
//     { id: 2, name: "orange", calories: 45 },
//     { id: 3, name: "banana", calories: 105 },
//     { id: 4, name: "coconut", calories: 159 },
//     { id: 5, name: "pineapple", calories: 37 },
//   ];
//   const vegetables = [
//     { id: 6, name: "potatoes", calories: 110 },
//     { id: 7, name: "celery", calories: 15 },
//     { id: 8, name: "carrots", calories: 25 },
//     { id: 9, name: "corn", calories: 63 },
//     { id: 10, name: "broccoli", calories: 50 },
//   ];

//   // CONDITIONAL RENDERING SAME THING IN DIFFERENT FORM USING THE && AND TENARY OPERATOR

//   return (
//     <>
//       {fruits.length > 0 && <List items={fruits} category="Fruits" />}
//       {vegetables.length > 0 ? (
//         <List items={vegetables} category="Vegetable" />
//       ) : null}
//     </>
//   );
// }

// export default App;

// import Button from "./assets/button";

// function App() {
//   return (
//     <>
//       <Button />
//     </>
//   );
// }

// export default App;

import MyComoponent from "./MyComponent";

import MyOnChangeComponent from "./assets/MyOnChangeComponent";

function App() {
  return (
    <>
      <MyComoponent />
      <MyOnChangeComponent />
    </>
  );
}

export default App;
