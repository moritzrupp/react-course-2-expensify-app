import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        'uid': 'foo'
    };
    const state = authReducer({}, action);
    expect(state.uid).toEqual(action.uid);
});

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: 'foo' }, action);
    expect(state).toEqual({});
});