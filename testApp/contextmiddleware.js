import React, {useState} from 'react';
import GlobalContext from './src/context';

const ContextMiddleware = props => {
  const [contextState, setContextState] = useState({
    isAuth: false,
    isLoading: false,
    token: '',
  });

  const middleware = (state, setstate) => {
    let localContext = Object.assign({}, {...state});

    const authOk = token => {
      localContext = Object.assign(
        {},
        {...localContext},
        {isLoading: false, token, isAuth: true},
      );
      setstate(localContext);
    };

    const getTokenClaims = () => {
      let token = localContext.token;
      if (token === '' || token === undefined) return;
      let claims = token.split('.')[1];
      let decodedString = atob(claims);
      return JSON.parse(decodedString);
    };

    return {authOk, getTokenClaims};
  };

  return (
    <GlobalContext.Provider
      value={[
        contextState,
        setContextState,
        middleware(contextState, setContextState),
      ]}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextMiddleware;
