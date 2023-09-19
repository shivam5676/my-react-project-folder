import { useState } from "react";

const SaveData = (props) => {
  const [inputData, setInputData] = useState();
  const inputField = props.inputFields;
  const inputFieldArray = inputField.map((current) => {
    return <input onChange={()=>inputHandler(current.name)} placeholder={current.name}></input>;
  });
  
  const inputHandler = (data,event) => {
    let val=event.target.value
console.log(data,val)
  };
  const tabledataHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div>
      <form onSubmit={tabledataHandler}>
        {inputFieldArray}
        <button type="submit">Add data to {props.dbname}</button>
      </form>
    </div>
  );
};
export default SaveData;
