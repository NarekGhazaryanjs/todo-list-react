import classes from "../ToDoMain/ToDoMain.module.css";
import {ChangeEvent, useContext} from "react";
import {ToDoContext} from "../../context/ToDo/ToDoState";
import { AuthContext } from "../../context/Auth/AuthState";

export const ToDoHeader = () => {

    const {handleFilter} = useContext(ToDoContext)

    const { handleLogout } = useContext(AuthContext);

    const onFilter = (e: ChangeEvent<HTMLInputElement>) => {
        handleFilter(e.target.value);
    }

    return(

        <div>

            <div id={classes.title}>
                <div className={classes.headTitle}>
                    <h1>MY TODO LIST</h1>
                    <button
                        className={`${classes.btn} ${classes.logoutBtn}`}
                        onClick={() => handleLogout()}
                    >
                        Logout
                    </button>
                </div>
                <label htmlFor="input">SEARCH</label>
                <br/>
                <input
                    onChange={onFilter}
                    placeholder="Search Todo..."
                    type="text"
                    id="input"/>
                <br/>
                <br/>
            </div>
        </div>
    )
}
