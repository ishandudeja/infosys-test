import reducer from './reducer'
import * as types from './actionTypes'
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
    newPas: {}
}
describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle ADD_USER', () => {
const user:IUser={ id: 0, name: "name", pasword: {} }

        expect(
            reducer( initialState, {
                type: types.ADD_USER,
                user
            })
        ).toEqual(initialState.users.concat(user))
    })
})

