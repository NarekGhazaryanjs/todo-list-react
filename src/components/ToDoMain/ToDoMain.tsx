import classes from "./ToDoMain.module.css";
import {ToDoHeader} from "../ToDoHeader/ToDoHeader";
import {ToDoAdd} from "../ToDoAdd/ToDoAdd";
import {ToDoBody} from "../ToDoBody/ToDoBody";
import {ToDoFooter} from "../ToDoFooter/ToDoFooter";

export const ToDoMain = () => {

    return(
        <section className = {classes.section}>
            <div  id = {classes.main}>
                <ToDoHeader/>
                <ToDoAdd />
                <ToDoBody/>
                <ToDoFooter/>
            </div>
        </section>
    )
}