import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToDoMain } from "./components/ToDoMain/ToDoMain";
import { AuthContext } from "./context/Auth/AuthState";
import { ToDoProvider } from "./context/ToDo/ToDoState";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import { useContext } from "react";

function App() {
  const { loggedIn } = useContext(AuthContext);
  console.log(loggedIn);
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          loggedIn ? (  
            <ToDoProvider >
              <ToDoMain />
            </ToDoProvider>
          ) : (
            <Navigate to='/login' />
          )
        } />
        <Route path='/login' element={
          !loggedIn ? <LogIn /> : <Navigate to='/' />
        } />
        <Route path='/register' element={
          !loggedIn ? <Register /> : <Navigate to='/' />
        } />
      </Routes>
    </Router>
  );
}

export default App;
