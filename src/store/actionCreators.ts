import * as actionTypes from "./actionTypes"

export function addUser(user: IUser) {
    const action: UserAction = {
        type: actionTypes.ADD_USER,
        user,
    }

    return simulateHttpRequest(action)
}

export function genPwd() {
    const action: UserAction = {
        type: actionTypes.GENERATE_PASWORD,
          user:  { id: 0, name: "name", pasword: { s1: 0, s2: 0, s3: 0, s4: 0, s5: 0 } }
    }

    return simulateHttpRequest(action)
}


export function removeUser(user: IUser) {
    const action: UserAction = {
        type: actionTypes.REMOVE_USER,
        user,
    }
    return simulateHttpRequest(action)
}

export function updateUser(user: IUser) {
      const action: UserAction = {
        type: actionTypes.UPDATE_USER,
        user,
    }
    return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: UserAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 500)
    }
}