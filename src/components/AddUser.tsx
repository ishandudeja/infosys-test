import * as React from "react"
import { genPwd } from "../store/actionCreators"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Dispatch } from "redux"
type Props = {
  saveUser: (User: IUser | any) => void

}

export const AddUser: React.FC<Props> = ({ saveUser }) => {

  let newPas: IPasword = useSelector(
    (state: UserState) => state.newPas,
    shallowEqual
  )
  const dispatch: Dispatch<any> = useDispatch()
  const [pasword, setPasword] = React.useState<IPasword>(newPas)
  const [isValid, setIsValid] = React.useState<boolean>(true)


  React.useEffect(function effectFunction() {
    if (newPas)
      setPasword(newPas);
   
  }, [newPas]);
  React.useEffect(function effectFunction() {
       if (!isValid) { setIsValid(false) }
  }, [isValid]);


  let validation: (pas: any) => boolean = function (pas: any): boolean {
    let valid: boolean = true;
    if (Object.keys(pas).length === 0) {
      valid = false;
      setIsValid(false);
    }
    Object.keys(pas).forEach(key => {
      if (pas[key] === null) {
        valid = false;
        setIsValid(!isValid);
        
      }
    })

     setIsValid(valid);
    return isValid;

  }

  const addNewUser = (e: React.FormEvent) => {
    e.preventDefault()
    let newUser: IUser = { id: 0, name: "Name", pasword: pasword }
    
    if ( validation(pasword)) {
      saveUser(newUser);
      setPasword({})

    }
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatch(genPwd())
    setPasword({
      ...newPas,
    })
    setIsValid(true)

  }

  return (

    <div className="container ">
      <form onSubmit={addNewUser} className="Add-User">

        <div className="m-5 p-5 ">

          <div className="d-flex justify-content-center ">

            <div className="m-1 border border-secondary pr-3 pl-3 p-2 bg-white"   >{pasword.s1 !== undefined ? pasword.s1 : '\u00A0 \u00A0'} </div>
            <div className="m-1 border border-secondary pr-3 pl-3 p-2 bg-white"   >{pasword.s2 !== undefined ? pasword.s2 : '\u00A0 \u00A0'} </div>
            <div className="m-1 border border-secondary pr-3 pl-3 p-2 bg-white"   >{pasword.s3 !== undefined ? pasword.s3 : '\u00A0 \u00A0'} </div>
            <div className="m-1 border border-secondary pr-3 pl-3 p-2 bg-white"   >{pasword.s4 !== undefined ? pasword.s4 : '\u00A0 \u00A0'} </div>
            <div className="m-1 border border-secondary pr-3 pl-3 p-2 bg-white"   >{pasword.s5 !== undefined ? pasword.s5 : '\u00A0 \u00A0'} </div>



          </div>
          <div className="d-flex justify-content-center container w-25">
            <button type="button" name="generate" onClick={handleClick} className="btn btn-primary btn-sm m-2 btn-block">Generate</button>
            <button type="submit" name="saveUser" data-testid="saveUser" disabled={isValid !== true ? true : false} className="btn btn-primary btn-sm m-2 btn-block">Save</button>
          </div>
          {isValid === false ? <div className="alert alert-danger" role="alert">
            Please Generate pasword First
          </div> : ""}

        </div>
      </form>
    </div>

  )
}
