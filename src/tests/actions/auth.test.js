import { login, logout } from '../../actions/auth';

test('should generate login action obhject', () => {
  const uid = 'abc123'
  const action = login(uid)
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  })
})

test('shold generate logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  })
})
