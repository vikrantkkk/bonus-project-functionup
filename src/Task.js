import React, { useState } from "react";
import Navbar from "./Navbar";

export default function Task() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [updateIndex, setUpdateIndex] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const hanldeAdd = () => {
    if (edit) {
      let updatedData = [...data];
      updatedData[updateIndex] = inputValue;
      setData(updatedData);
      setEdit(false);
      setInputValue("");
    } else {
      setData([...data, inputValue]);
      setInputValue("");
    }
  };

  const handleDelete = (index) => {
    let newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleEdit = (index) => {
    let newEditData = [...data];
    let e = newEditData[index];
    setInputValue(e);
    setEdit(true);
    setUpdateIndex(index);
  };
  return (
    <div>
      <Navbar />
      <h1>Task</h1>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={hanldeAdd}>{edit ? "update" : "Add"}</button>
      {data.map((item, index) => {
        return (
          <ul key={index}>
            <li>{item}</li>
            <button onClick={() => handleDelete(index)}>delete</button>
            <button onClick={() => handleEdit(index)}>edit</button>
          </ul>
        );
      })}
    </div>
  );
}

// import React, { useState } from "react";
// import Navbar from "./Navbar";

// export default function Task() {
//   const [inputValue, setInputValue] = useState("");
//   const [data, setData] = useState([]);
//   const [edit, setEdit] = useState(false);
//   const [updateIndex, setUpdateIndex] = useState(null);

//   const handleChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleAdd = () => {
//     if (edit) {
//       let updatedData = [...data];
//       updatedData[updateIndex] = inputValue;
//       setData(updatedData);
//       setEdit(false);
//       setInputValue("");
//     } else {
//       setData([...data, inputValue]);
//       setInputValue("");
//     }
//   };

//   const handleDelete = (index) => {
//     let newData = [...data];
//     newData.splice(index, 1);
//     setData(newData);
//   };

//   const handleEdit = (index) => {
//     let editData = data[index];
//     setInputValue(editData);
//     setUpdateIndex(index);
//     setEdit(true);
//   };

//   return (
//     <div>
//       <Navbar />
//       <h1>Task</h1>
//       <input value={inputValue} onChange={handleChange} />
//       <button onClick={handleAdd}>{edit ? "Update" : "Add"}</button>
//       {data.map((item, index) => {
//         return (
//           <ul key={index}>
//             <li>{item}</li>
//             <button onClick={() => handleDelete(index)}>delete</button>
//             <button onClick={() => handleEdit(index)}>edit</button>
//           </ul>
//         );
//       })}
//     </div>
//   );
// }
