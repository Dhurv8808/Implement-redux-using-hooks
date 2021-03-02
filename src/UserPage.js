import { useSelector, useDispatch } from 'react-redux';

export default function UserPage() {
  const dispatch = useDispatch();

  const userName = useSelector(state => state.userName);

  return (
    <>
      <div>{userName || 'Sveletech'}</div>
      <button onClick={() => dispatch({type: 'SET_USER_NAME', payload: 'Dhruv'})}>
        Change user
      </button>
    </>
  )
}
