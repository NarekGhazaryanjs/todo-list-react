import { useContext, useState } from "react"
import classes from '../LogIn/LogIn.module.css';
import { AuthContext } from "../../context/Auth/AuthState"
import { Link } from "react-router-dom";

const Register = () => {
    const auth = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleRegister = (event: any) => {
        event.preventDefault();
        const { target } = event;
        if (target.password.value === target.confirmPassword.value) {
            auth.handleRegister({
                username: target.username.value,
                password: target.password.value,
            })
        } else {
            setError("Password did not match confirm password");
        }
    };

    return (
        <div className={classes.container}>
            <h1>Register</h1>
            <form className={classes.authForm} onSubmit={handleRegister}>
                <input type="text" name="username" placeholder="Enter username" />
                <input type="password" name="password" placeholder="Enter password" />
                <input type="password" name="confirmPassword" placeholder="Confirm password" />
                <input type='submit' title='Register' />
                {error && <div className={classes.error}>{error}</div>}
                <Link to="/login">Log In</Link>
            </form>
        </div>
    )
};

export default Register;
