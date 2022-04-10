import { useContext } from "react"
import { Link } from "react-router-dom";
import classes from './LogIn.module.css';
import { AuthContext } from "../../context/Auth/AuthState"

const LogIn = () => {
    const auth = useContext(AuthContext);

    const handleLogin = (event: any) => {
        event.preventDefault();

        auth.handleLogin({
            username: event.target.username.value,
            password: event.target.password.value,
        })
    };
    return (
        <div className={classes.container}>
            <h1>Log In</h1>
            <form className={classes.authForm} onSubmit={handleLogin}>
                <input type="text" name="username" placeholder="Enter username" />
                <input type="password" name="password" placeholder="Enter password" />
                <input type='submit' title='Log In' />
                {auth.error && <div className={classes.error}>Invalid username or password</div>}
                <Link to='/register'>
                    Register
                </Link>
            </form>
        </div>
    )
};

export default LogIn;
