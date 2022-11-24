import React, { useState } from "react";
import { useRef } from "react";
import { FcDeleteDatabase } from 'react-icons/fc';
let nextId = 0;
const Todo = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  // save refernce for dragitem and dragoveritem
  const dragItem = useRef(null)
  const dragOverItem = useRef(null)

  
 //const handle drag sorting
  const handleSort=()=>{
    //duplicate items
    let _list = [...list]

    //remove and save the dragged item content
		const draggedItemContent = _list.splice(dragItem.current, 1)[0]

		//switch the position
		_list.splice(dragOverItem.current, 0, draggedItemContent)

		//reset the position ref
		dragItem.current = null
		dragOverItem.current = null

		//update the actual array
		setList(_list)
  }
  const listHandle = () => {
    setList("");
    if (value.length > 0) {
      setList([
        ...list,
        {
          id: nextId++, 
          data: value,
        },
      ]);
    } else {
      alert("data is not valid");
    }
  };
  const deleteHandler = (id) => {
    let newList = list.filter((item) => item.id !== id);
    setList(newList);
  };
  return (
    <div style={{ display: "flex", "justify-content": "center" }}>
      <section className="phase-cut"
      >
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        
        <ul>
          {list.map((item,index) => (
            <li className="li" id="yes"
             draggable 
             onDragStart={(e)=>dragItem.current=index}
             onDragEnter={(e)=>dragOverItem.current=index}
             onDragEnd={handleSort}
             onDragOver={(e)=>e.preventDefault()}
              key={item.id}
            >
              {item.data}
              <button className="btnn" onClick={() => deleteHandler(item.id)}><FcDeleteDatabase /></button>
            </li>
          ))}
          
        </ul>
        <button className="btn" onClick={listHandle}>+Add</button>
      </section>
    </div>
  );
};

export default Todo;
