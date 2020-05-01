import React, { useReducer, useEffect } from 'react';
import reducer, { initialState } from '../state/reducer';
import PublishMessage from '../components/PublishMessage';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   setInterval(() => dispatch(newMessage('foo')), 30000);
  // });

  console.log('state', state);
  return (
    <div className='App'>
      <h2>Reaction</h2>
      <hr />
      <PublishMessage dispatch={dispatch} />
    </div>
  );
}

export default App;
