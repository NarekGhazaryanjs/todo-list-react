import { createContext, useCallback, useReducer } from "react";
import { ToDoList } from "./ToDoList";
import { ToDoReducer } from "./ToDoReducer";
import { actionAdd, actionDelete, actionDeleteCompleted, actionDone, actionEdit, actionFilter } from "./ToDoActions";


export const ToDoContext = createContext<{
    [key: string]: any;
}>(ToDoList);

// Provider Component
export const ToDoProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(ToDoReducer, ToDoList || []);

    // Actions

    const handleAdd = useCallback((title: string, description: string) => {
        dispatch(actionAdd(title, description));
    }, []);

    const handleEdit = useCallback((id: number, title: string, description: string) => {
        dispatch(actionEdit(id, title, description))
    }, []);

    const handleDelete = useCallback((id: number) => {
        dispatch(actionDelete(id))
    }, [])

    const handleChecked = useCallback((id: number, isDone: boolean) => {
        dispatch(actionDone(id, isDone))
    }, []);

    const handleDeleteCompleted = useCallback(() => {
        dispatch(actionDeleteCompleted())
    }, [])

    const handleFilter = useCallback((title: string) => {
        dispatch(actionFilter(title))
    }, []);

    return (
        <ToDoContext.Provider value={{
            todos: state,
            handleAdd,
            handleDelete,
            handleEdit,
            handleChecked,
            handleDeleteCompleted,
            handleFilter,
        }}>
            {children}
        </ToDoContext.Provider>
    )
}