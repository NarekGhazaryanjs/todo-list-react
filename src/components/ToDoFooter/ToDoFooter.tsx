import classes from "../ToDoMain/ToDoMain.module.css"
import {useContext} from "react";
import {ToDoContext} from "../../context/ToDo/ToDoState";
import {ToDo} from "../../global";

export const ToDoFooter = () => {
    const {todos, handleDeleteCompleted} = useContext(ToDoContext)
    const completed = todos.filter((todo: ToDo) => todo.isDone).length

    return(
        <div className={classes.card}>
            <p> {completed} of {todos.length} Completed</p>

            <button className={classes.btn} onClick = {handleDeleteCompleted}> Deleted Completed Todos</button>
        </div>
    )
}