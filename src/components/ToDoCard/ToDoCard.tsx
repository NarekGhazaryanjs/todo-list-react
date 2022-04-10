import { useState, useContext, useCallback } from "react";
import classes from "../ToDoMain/ToDoMain.module.css";
import { ToDo } from "../../global";
import { ToDoContext } from "../../context/ToDo/ToDoState";

export const ToDoCard = (item: ToDo) => {
    const [title, setTitle] = useState(item.title)
    const [description, setDescription] = useState(item.description)
    const { handleDelete, handleEdit, handleChecked } = useContext(ToDoContext)
    const [editButtonVis, setEditButtonVis] = useState(false)
    const onEditClickHandler = () => {
        setEditButtonVis(true)
    }
    const handleSave = useCallback(() => {
        handleEdit(item.id, title, description);
        setEditButtonVis(false)
    }, [handleEdit, description, item.id, title])

    return (
        <div id={classes.bookDiv} key={item.id}>
            <div className={classes.card}>
                <input
                    onChange={() => { handleChecked(item.id, !item.isDone) }}
                    checked={item.isDone}
                    type='checkbox' />
                <span>
                    {item.title}
                </span>
                <div>
                    {item.title + ":   " + item.description}
                </div>
                <button
                    className={classes.btn}
                    onClick={() => handleDelete(item.id)}
                >
                    Delete
                </button>
                <div style={{ display: editButtonVis ? 'block' : 'none' }}>
                    <input
                        className={classes.inputs}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="title"
                        type="text" />
                    <input
                        className={classes.inputs}
                        value={description}
                        placeholder="description"
                        onChange={(e) => setDescription(e.target.value)}
                        type="text" />
                    <button
                        className={classes.btn}
                        onClick={() => handleSave()}
                    >  Save your Edit
                    </button>
                </div>
                <button
                    className={classes.btn}
                    onClick={onEditClickHandler}
                >
                    Edit
                </button>
            </div>

        </div>
    )
}