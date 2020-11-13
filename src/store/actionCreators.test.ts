import * as actions from './actionCreators'
import * as types from './actionTypes'


describe('actions', () => {

  it('should create an action to add a user', () => {
    const user: IUser = { id: 0, name: "name", pasword: { s1: 0, s2: 0, s3: 0, s4: 0, s5: 0 } }
    const expectedAction: UserAction = {
      type: types.ADD_USER,
      user
    }

    expect(actions.addUser(user)).toBeDefined()
  })
})