import React, { useReducer, useEffect } from 'react';
import reducer, { initialState } from '../state/reducer';
import Context from '../context';
import PublishMessage from '../components/PublishMessage';
import MessageBoard from '../components/MessageBoard';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   setInterval(() => dispatch(newMessage('foo')), 30000);
  // });

  console.log('state', state.messages);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <h2>Reaction</h2>
      <hr />
      <PublishMessage />
      <hr />
      <MessageBoard />
    </Context.Provider>
  );
}

export default App;
