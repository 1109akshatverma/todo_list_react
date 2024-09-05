import { useState } from "react";
import AppName from "./components/AppName";
import Input from "./components/Input";
import Outputss from "./components/Outputss";
import Error from "./components/Error";

function App() {
  // let items = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "29/02/2024",
  //   },
  //   {
  //     name: "Go to gym ",
  //     dueDate: "01/02/2023",
  //   },
  //   {
  //     name: "Study DSA",
  //     dueDate: "29/02/2024",
  //   },
  //   {
  //     name: "Practise React",
  //     dueDate: "29/08/2024",
  //   },
  // ];

  let [items, setItems] = useState([]);

  const handleOnClick = (itemName, dueDate) => {
    let newArr = [
      ...items,
      {
        name: itemName,
        dueDate: dueDate,
      },
    ];

    setItems(newArr);
  };

  const handleDeleteClick = (itemName) => {
    const newArr = items.filter((item) => item.name !== itemName);
    setItems(newArr);
    console.log(`Deleted item is ${itemName}`);
  };

  return (
    <center>
      <AppName />
      <Input clicked={handleOnClick}></Input>
      {items.length === 0 && <Error></Error>}
      <Outputss todoItems={items} onDeleteClick={handleDeleteClick}></Outputss>
    </center>
  );
}

export default App;
