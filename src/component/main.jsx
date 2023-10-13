import React, { useState } from "react";
import List from "./list";

function Main() {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);
  const [status, setStatus] = useState("Äll");
  console.log(status , 'ss');

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const listofitems = () => {
    setNewItem((prevValue) => {
      return [...prevValue, { text: item, isChecked: false }];
    });
    setItem("");
  };
  // console.log(newItem);

  const removeall = () => {
    setNewItem([]);
  };

  const deleteItem = (index) => {
    setNewItem((prevValue) => {
      return prevValue.filter((_, i) => i !== index);
    });
  };

  const renderSwitch = (status,newItem) => {
    switch (status) {
      case "All":
        return (
          <List
            data={newItem}
            handleChecked={handleChecked}
            deleteItem={deleteItem}
          />
        );
        break;

      case "Complete":
        return (
          <List
            data={newItem.filter((task) => task.isChecked)}
            handleChecked={handleChecked}
            deleteItem={deleteItem}
          />
        );
        break;        
      case "Active":
        return (
          <List
            data={newItem.filter((task) => !task.isChecked)}
            handleChecked={handleChecked}
            deleteItem={deleteItem}
          />
        );
        break;
        default:
          return (
            <List
            data={newItem}
            handleChecked={handleChecked}
            deleteItem={deleteItem}
          />
          );
        
    }
  };

  const handleChecked = (id) => {
    const updateState = [...newItem];
    updateState[id].isChecked = !updateState[id].isChecked;
    setNewItem(updateState);
    console.log(newItem);
  };

  return (
    <div>
      <div className="main">
        <div className="second">
          <input
            type="text"
            value={item}
            placeholder="Enter the Work"
            onChange={itemEvent}
          />
          <button className="btn1 button" onClick={listofitems}>
            Add
          </button>
          <ul className="ul">{renderSwitch(status,newItem)}</ul>
        </div>
        <div className="third">
          <button className="btn1 btn2" onClick={() => setStatus("Active")}>
            Active
          </button>
          <button className="btn1 btn3" onClick={() => setStatus("Complete")}>
            Complete
          </button>
          <button className="btn1 btn5" onClick={() => setStatus("All")}>
            ALL
          </button>
          <button className="btn1 btn4" onClick={removeall}>
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
