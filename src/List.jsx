import PropTypes from "prop-types";

function List(props) {
  // MADE A LIST OF VALUES
  //   const fruits = ["apple", "orange", "banana", "coconut", "pineapple"]; // Creating a list

  //   const listItems = fruits.map((fruit) => <li>{fruit}</li>); //using a list to get an array of all fruits

  // MAKING IT AN ARRAY OF OBJECTS

  //   const fruits = [
  //     { id: 1, name: "apple", calories: 95 },
  //     { id: 2, name: "orange", calories: 45 },
  //     { id: 3, name: "banana", calories: 105 },
  //     { id: 4, name: "coconut", calories: 159 },
  //     { id: 5, name: "pineapple", calories: 37 },
  //   ];

  //   fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL ORDER SORTING

  //   fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL ORDER

  // SORTING BY CALORIES
  //   fruits.sort((a, b) => a.calories - b.calories); // NUMERICAL ORDER

  //   fruits.sort((a, b) => b.calories - a.calories); // REVERSE NUMERICAL ORDER

  const category = props.category;

  const itemList = props.items;

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; <b>{item.calories}</b>
    </li>
  ));

  //   const listItems = fruits.map((fruit) => (
  //     <li key={fruit.id}>
  //       {fruit.name}: &nbsp; <b>{fruit.calories}</b>
  //     </li>
  //   )); // it is nice to render arrays with key. And the key has to be unique for react to identify it easily. Here I will use the id value as key. if you don't specify the key, it will give a warning on the console. This will help keep track of items added and removed

  //   return <ol>{listItems}</ol>; //rendering the array as an unordered list.

  // LOW CALORIES FOOD
  //   const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);

  // HIGH CALORIES
  //   const highCalFruits = fruits.filter((fruit) => fruit.calories > 100);

  //   const listItems = highCalFruits.map((highCalFruit) => (
  //     <li key={highCalFruit.id}>
  //       {highCalFruit.name}: &nbsp; <b>{highCalFruit.calories}</b>
  //     </li>
  //   ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>;
    </>
  ); //rendering the array as an unordered list.
}

export default List;

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

List.defaultProps = {
  category: "Category",
  items: [],
};
