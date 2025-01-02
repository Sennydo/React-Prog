import { useState } from "react";
import { useEffect } from "react";
import "./styles.css";
import NewToDoForm from "./NewToDoForm";
import ToDoList from "./ToDoList";

export default function App(){
  const [toDos, setToDos] = useState(() => {
    const localValue = localStorage.getItem("ITEM")
    if(localValue == null) return []
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(toDos))
  }, [toDos]);

  function addToDo(title){
    setToDos((currentToDo) => {
      return([...toDos, {id: crypto.randomUUID(), title, completed:false}])
    })
  }

  function toggleToDo(id, completed){
    setToDos(currentToDo =>{
      return(
        currentToDo.map(toDo => {
          if (toDo.id === id) {
            return {...toDo, completed}
          }
          return toDo;
        })
      )
    })
  }

  function deleteToDo(id) {
    setToDos(currentToDos => {
      return currentToDos.filter(toDo => toDo.id !== id)
    })
  }
  // {todos.length === 0 && "no todo"} shows no todo if the length is 0
  return(
    <>
    <NewToDoForm onSubmit={addToDo}/>
    <h1 className="header">ToDo List</h1>
    <ToDoList toDos={toDos} toggleToDo={toggleToDo} deleteToDo={deleteToDo} />
    </>
  );
}