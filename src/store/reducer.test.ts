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
const user: IUser = { id: 1, name: "name", pasword: {} }
describe('User reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    });

    it('should handle ADD_USER', () => {

        //add new user and check the lenght of user list
        expect(
            reducer(initialState, {
                type: types.ADD_USER,
                user
            }).users.length
        ).toEqual(initialState.users.length + 1)
    });

    it('should handle Gentate Pasword', () => {

        //generate new pasword
        expect(
            reducer(initialState, {
                type: types.GENERATE_PASWORD,
                user
            }).newPas
        ).not.toBe({})
    });

    it('should handle Remove User', () => {
        //remove user and check the lenght of user list
        expect(
            reducer(initialState, {
                type: types.REMOVE_USER,
                user
            }).users.length
        ).toBe(initialState.users.length - 1)
    });

    it('should handle Update User', () => {
        let updateUser: IUser = { id: 1, name: "Ishan", pasword: {} }
        expect(
            reducer(initialState, {
                type: types.UPDATE_USER,
                 user:updateUser
            }).users.find(f=>f.id=updateUser.id)?.name
        ).toEqual("Ishan")
    });
})

