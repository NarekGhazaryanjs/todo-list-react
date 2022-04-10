import { useContext, useState, useMemo } from "react";
import classes from "../ToDoMain/ToDoMain.module.css";
import { ToDoCard } from "../ToDoCard/ToDoCard";
import { ToDo } from "../../global";
import { ToDoContext } from "../../context/ToDo/ToDoState";
import Pagination from "../Pagination/Pagination";

const ITEMS_PER_PAGE = 5;

export const ToDoBody = () => {
    const { todos } = useContext(ToDoContext);

    const [page, setPage] = useState(0);

    const todosSplitted = useMemo(
        () => [...todos].splice(page * ITEMS_PER_PAGE, ITEMS_PER_PAGE),
        [todos, page],
    );

    return (
        <div>
            {
                todosSplitted.map((item: ToDo) => {
                    return <div style={{ display: item.isHidden ? 'none' : '' }} key={item.id}>
                        <ToDoCard {...item} />
                    </div>
                })
            }
            {todos.length > ITEMS_PER_PAGE && (
                <div className={classes.pagination}>
                    <Pagination
                        page={page}
                        pageCount={Math.ceil(todos.length / ITEMS_PER_PAGE)}
                        handlePageChange={setPage}
                    />
                </div>
            )}
        </div>
    )
}