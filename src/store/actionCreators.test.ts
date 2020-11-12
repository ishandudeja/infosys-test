
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from './actionTypes';
import * as actions from './actionCreators';
import fetchMock from 'fetch-mock'
import expect from 'expect' // You can use any testing library

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    // fetchMock.getOnce('/todos', {
    //   body: { todos: ['do something'] },
    //   headers: { 'content-type': 'application/json' }
    // })

    const expectedActions = [
      { type: types.ADD_USER },
    //   { type: types.FETCH_TODOS_SUCCESS, body: { todos: ['do something'] } }
    ]
    const store = mockStore({ user: [] })
    const user:IUser =  { id: 0, name: "name", pasword: { s1: 0, s2: 0, s3: 0, s4: 0, s5: 0 } }
    return store.dispatch(actions.addUser(user)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})


// describe('ADD_USER actions', () => {
//     it('should create an action to add a user', () => {
//       const user:IUser =  { id: 0, name: "name", pasword: { s1: 0, s2: 0, s3: 0, s4: 0, s5: 0 } }
//       const addUserAction:UserAction = {
//         type: actionTypes.ADD_USER,
//         user
//       }
//       expect(actions.addUser(user)).toEqual(addUserAction)
//     })
//   })