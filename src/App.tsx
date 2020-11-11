import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Users } from "./components/Users"
import { AddUser } from "./components/AddUser"
import { addUser, genPwd, removeUser } from "./store/actionCreators"
import { Dispatch } from "redux"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App: React.FC = () => {
  const users: readonly IUser[] = useSelector(
    (state: UserState) => state.users,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const saveUser = React.useCallback(
    (user: IUser) => dispatch(addUser(user)),
    [dispatch]
  )

  
  

  return (
    <div className="App bg-light">
      <Router>
        <nav className="nav shadow-sm bg-white">

          <Link to="/" className="nav-link active" >Generate</Link>
          <Link to="/users" className="nav-link " >Saved</Link>
        </nav>
        <div className="container">
          <Route path="/" exact >
            <AddUser saveUser={saveUser}  />
          </Route>
          <Route path="/users" exact >
            {users.map((user: IUser) => (
              <Users
                key={user.id}
                user={user}
                removeUser={removeUser}
              />
            ))}

            {users.length==0? <div>No User List Available</div> :"" }

          </Route>
        </div>
      </Router>
    </div>
  )
}

export default App;
