function useThunk(reducer, initialState) {
  // Keep track of mounted state to prevent async calls for updating state and leaking
  const mounted = useRef(true);
  useEffect(() => () => (mounted.current = false), []);

  // Setup underlying useReducer core
  const [state, dispatch] = useReducer(reducer, initialState);

  // Create a "safe" dispatch for using with async ops
  function mountedDispatch(action) {
    if (mounted.current) {
      dispatch(action);
    }
  }

  // Create thunk function for request dispatch chains
  function thunk(options, actions, args = {}, callback) {
    mountedDispatch({ type: actions[0], args });
    request(options)
      .then(response => {
        mountedDispatch({ type: actions[1], response, args });
        if (callback) callback();
      })
      .catch(error => {
        mountedDispatch({ type: actions[2], error, args });
      });
  }

  // Return in 'tuple' [state, thunk, dispatch]
  return [state, thunk, mountedDispatch];
}

function MyProvider(props) {
  const thunk = useThunk(reducer, { count: 0, loading: false, err: undefined });
  return <MyContext.Provider value={thunk} {...props} />;
}

function useThunkContext() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("Must be used within <MyProvider />");
  }
  return context;
}
