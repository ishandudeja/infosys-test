import { Users } from './../components/Users';
import { stat } from "fs"
import { useCallback } from "react"
import * as actionTypes from "./actionTypes"

const initialState: UserState = {
    users: [
        {
            id: 1,
            name: "User 1",
            pasword: { s1: 1234, s2: 1234, s3: 1234, s4: 4567, s5: 1254 }

        },
        {
            id: 2,
            name: "User 2",
            pasword: { s1: 1234, s2: 1234, s3: 1234, s4: 4567, s5: 1254 }

        },
    ],
     newPas: {  }
}

const reducer = (
    state: UserState = initialState,
    action: UserAction
): UserState => {
    
    switch (action.type) {
        
        case actionTypes.ADD_USER:
            debugger
            const newUser: IUser = {
                id: Math.random(), // not really unique
                name: action.user.name == undefined ? "Name" : action.user.name,
                pasword: action.user.pasword,
            }
            return {
                ...state,
                users: state.users.concat(newUser),
            }
        case actionTypes.GENERATE_PASWORD:
           let validateNum: (num:Number)=> any  =function (num:Number):any{
               let isValid:boolean=true;
               if(num.toString().length<4)
               isValid=false;
             let pin:string[]=   num.toString().split('')
             if (pin[0]+pin[1]==pin[2]||pin[1]+pin[2]==pin[3])
             isValid=false  

             if(0== Number( pin[0])-Number( pin[1]) ||Number( pin[1])-Number( pin[2])==0 || Number( pin[2])-Number( pin[3]) )
             isValid=false;
             if (!isValid)
            return validateNum(Math.round( Math.random()*10000))
            else
            return num
            

           }

            let genPasword: () => IPasword = function ( ): IPasword {
                const pwd:IPasword={ 
                        s1: validateNum( Math.round( Math.random()*10000)), // not really unique
                        s2: Math.round(Math.random()*10000),
                        s3: Math.round( Math.random()*10000),
                        s4:Math.round( Math.random()*10000),
                        s5:Math.round( Math.random()*10000)
                       }
                       state.newPas=pwd
                       return pwd;
                      
              };
              genPasword();
            
            return {
                ...state
                
            }
        case actionTypes.REMOVE_USER:
            const updatedUser: IUser[] = state.users.filter(
                user => user.id !== action.user.id
            )
            return {
                ...state,
                users: updatedUser,
            }
            case actionTypes.UPDATE_USER:
                debugger
            const updateIndex = state.users.findIndex( obj => obj.id == action.user.id )
            const updatedObj = { ...state.users[updateIndex], name: action.user.name};
            const updatedUsers:IUser[] = [
                ...state.users.slice(0, updateIndex),
                updatedObj,
                ...state.users.slice(updateIndex + 1),
              ];
              console.log(updatedUsers);
            return {
                ...state,
                 users: updatedUsers,
            }
    }
    return state
}

export default reducer