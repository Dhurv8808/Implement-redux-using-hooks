const initialState = {
  userName: ''
}

export default function reducer(currentState = initialState, action) {
  switch (action.type) {
    case 'SET_USER_NAME':
      return {
        ...currentState,
        userName: action.payload
      }
    default: return currentState;
  }
}