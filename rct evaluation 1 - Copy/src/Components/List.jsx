import { useState } from "react";
import AddItem from "./AddItem";
import ListItem from "./ListItem";
const maxLength = 5;

function List() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const handleAdd = () => {
    const obj = {
      id:  Date.now() + text,
      title: text,
      status: false
    };
    setData([...data, obj]);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
//console.log(text)
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  console.log(data);
  return (
    <div>
      <AddItem
        handleChange={(e) => handleChange(e)}
        handleAdd={handleAdd}
        maxLength={maxLength}
        length1={data.length}
        length2={maxLength}
      />
      {data.map((item) => (
        <ListItem
          id={item.id}
          title={item.title}
          status={item.status}
          handleDelete={(id) => handleDelete(item.id)}
        />
      ))}
    </div>
  );
}

export default List;
