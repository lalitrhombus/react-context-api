/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import React, { useReducer, useRef } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function useThunk([state, dispatch]) {
  const newDispatchRef = useRef(action => {
    if (typeof action === 'function') {
      action(newDispatchRef.current);
    } else {
      dispatch(action);
    }
  });
  return [state, newDispatchRef.current];
}

function reducer(state, action) {
  switch (action.type) {
    case 'FETCHING_DATA':
      return { ...state, isLoading: true };
    case 'FETCHED_DATA':
      return { ...state, isLoading: false, data: action.payload };
    default:
      console.error('No Type Matched');
      return new Error();
  }
}

function getTopPosts() {
  return async dispatch => {
    dispatch({ type: 'FETCHING_DATA' });
    const posts = await axios
      .get('https://www.reddit.com/r/mysubreddit/top/.json?count=20')
      .then(response => response.data);
    dispatch({ type: 'FETCHED_DATA', payload: posts });
  };
}

function App() {
  const [state, dispatch] = useThunk(
    useReducer(reducer, { isLoading: false, data: {} })
  );

  return (
    <div>
      <button onClick={() => dispatch(getTopPosts())}>Fetch Data</button>
      <code>{JSON.stringify(state, null, 2)}</code>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
