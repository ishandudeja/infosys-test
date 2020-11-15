import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import { updateUser } from "../store/actionCreators"
type Props = {
  user: IUser
  removeUser: (user: IUser) => void
}

 const Users: React.FC<Props> = ({ user, removeUser }) => {
  const dispatch: Dispatch<any> = useDispatch()
  const [emp, setEmp] = React.useState<IUser>()
  const deleteUser = React.useCallback(
    (user: IUser) => dispatch(removeUser(user)),
    [dispatch, removeUser]
  )
  React.useEffect(function effectFunction() {
    if (emp) {
     dispatch(updateUser(emp))
      }
  },[emp,dispatch]);
  
  const handleUserData = (user: IUser, e: React.FormEvent<HTMLInputElement>) => {
    user.name = e.currentTarget.value
    setEmp(user)
      }



  return (
    <div className="container m-2">
      <div className="d-flex justify-content-center ">
      
          <input type="text" value={user.name} className="m-1 border border-secondary p-2 bg-white" onChange={(e) => handleUserData(user, e)}  />
          <div className="m-1 border border-secondary p-2 bg-white"   >{user.pasword?.s1}</div>
          <div className="m-1 border border-secondary p-2 bg-white"   >{user.pasword?.s2}</div>
          <div className="m-1 border border-secondary p-2 bg-white"   >{user.pasword?.s3}</div>
          <div className="m-1 border border-secondary p-2 bg-white"   >{user.pasword?.s4}</div>
          <div className="m-1 border border-secondary p-2 bg-white"   >{user.pasword?.s4}</div>
          <div className="p-2"> <button className="btn btn-danger btn-sm" onClick={() => deleteUser(user)}>Delete</button></div>
          
        </div>

      

    </div>

  )
}

export default Users;