import { Users } from './../components/Users';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from './actionTypes'
import expect from 'expect'
import { createStore, applyMiddleware, Store } from "redux"
import reducer from "../store/reducer"

const user: IUser = { id: 1, name: "name", pasword: {} }
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
describe('Store', () => {

  it('creates store and add and fatch user list', () => {


    const Addaction: UserAction = {
      type: types.ADD_USER,
      user,
    }

    const store: Store<UserState, UserAction> & {
      dispatch: DispatchType
    } = createStore(reducer, applyMiddleware(thunk))
    store.dispatch(Addaction)
    const state: UserState = store.getState()
    initialState.users.push(user)
    expect(state.users.length).toEqual(initialState.users.length)

  })
})