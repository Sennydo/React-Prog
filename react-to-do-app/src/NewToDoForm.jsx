import { useState } from "react";

export default function NewToDoForm({onSubmit}) {

    const [newItem, setNewItem] = useState("");
    

    function handleSubmit(e) {
        e.preventDefault(); // stops usual procedure

        if(newItem === "") return;

        onSubmit(newItem);
    
        //Remove contents after submitting
        setNewItem("");
      }

    return(
        <>
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label>New Item</label>
        <input type="text" id="item" placeholder="Type task here" value={newItem} onChange={e => setNewItem(e.target.value)} ></input>
      </div>
      <button className="btn">Add</button>
    </form>
        </>
    );
}