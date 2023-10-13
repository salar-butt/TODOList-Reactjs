import React, { useState } from 'react';
import { AiFillDelete } from "react-icons/ai";

function List({ data, handleChecked, deleteItem }) {
  console.log(data , 'pp');
  const [line, setLine] = useState(false);

  return data.map((task, index) => {
    console.log(task , 'task')
    return (
      <div key={index}>
        <div className='checkbox' style={{ backgroundColor: "orange" }}>
          <div className='box2'>
            <input
              type="checkbox"
              onChange={() => handleChecked(index)} // Use the index as the id
            />
            <li className='li' style={{ textDecoration: task.isChecked ? "line-through" : "none" }}>
              {task.text}
            </li>
          </div>
          <AiFillDelete className='delicon' onClick={() => deleteItem(index)} /> {/* Use the index as the id */}
        </div>
      </div>
    );
  });
}

export default List;
