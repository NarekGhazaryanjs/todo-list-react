import { createContext, useCallback, useReducer, useState } from "react";

const LOGGED_IN_KEY = 'logged_in';

const REGISTERED_USERS_KEY = 'registered_users';

const state: any = {
    loggedIn: sessionStorage.getItem(LOGGED_IN_KEY) === 'true',
    handleLogin: null,
    handleLogout: null,
    handleRegister: null,
    error: false,
};

export const AuthContext = createContext<{
    loggedIn: boolean;
    handleLogin: Function,
    handleLogout: Function,
    handleRegister: Function,
    error?: Boolean;
}>(state);

// Provider Component
export const AuthProvider = ({ children }: any) => {
    const [auth, setAuth] = useState({
        loggedIn: state.loggedIn,
        error: state.error,
    });
    console.log(auth);

    const setLoggedIn = useCallback((loggedIn, error?) => {
        setAuth({ loggedIn, error });

        sessionStorage.setItem(LOGGED_IN_KEY, loggedIn);
    }, [setAuth]);

    const handleLogin = useCallback(data => {
        const registeredUsersJSON = localStorage.getItem(REGISTERED_USERS_KEY);
        if (!registeredUsersJSON) setLoggedIn(false, true);
        else {
            const user = JSON.parse(registeredUsersJSON)
            .find((item: any) => (
                item.username === data.username
                && item.password === data.password
            ));

            setLoggedIn(!!user, !!!user);
        }
    }, [setLoggedIn]);

    const handleRegister = useCallback(data => {
        const registeredUsersJSON = localStorage.getItem(REGISTERED_USERS_KEY);

        if (!registeredUsersJSON) {
            localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify([data]));
        } else {
            const registeredUsers = JSON.parse(registeredUsersJSON);

            const user = registeredUsers.find((item: any) => item.username === data.username);
            if (!user) {
                registeredUsers.push(data);
                localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(registeredUsers));
            }
        }
        
        setLoggedIn(true);
    }, [setLoggedIn]);

    const handleLogout = useCallback(() => {
        setLoggedIn(false, false);
    }, [setLoggedIn]);


    return (
        <AuthContext.Provider value={{
            ...auth,
            handleLogin,
            handleLogout,
            handleRegister,
        }}>
            {children}
        </AuthContext.Provider>
    )
}