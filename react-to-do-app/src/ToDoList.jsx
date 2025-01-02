import ToDoItem from "./ToDoItem";
export default function ToDoList({toDos, toggleToDo, deleteToDo}){
    return(<>
    <ul className="list">
      {toDos.length === 0 && "No ToDos"}
      {toDos.map((toDo) => {
        return(
            <ToDoItem {...toDo} key={toDo.id}
            toggleToDo={toggleToDo} deleteToDo={deleteToDo} />
        );
      })}
    </ul>
    </>);
}