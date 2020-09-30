import React, { useState, createContext, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { VALIDATE_TOKEN } from '../services/requests/authentication';

interface AuthContextData {
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [checkingTokenValidation, setChekingTokenValidation] = useState(true);

  const [validateToken, { data: validateTokenData }] = useMutation(
    VALIDATE_TOKEN,
  );

  const signOut = (): void => {
    console.log('Logout');
  };

  useEffect(() => {
    const token = localStorage.getItem('Digl:token');

    if (!token) {
      setChekingTokenValidation(false);
      return;
    }

    validateToken({ variables: { token } });
  }, []);

  useEffect(() => {
    if (validateTokenData) {
      if (validateTokenData.data.error !== null) {
        localStorage.removeItem('Digl:token');
      }
      setChekingTokenValidation(false);
    }
  }, [validateTokenData]);

  if (checkingTokenValidation) {
    return <div />;
  }

  return (
    <AuthContext.Provider value={{ signOut }}>{children}</AuthContext.Provider>
  );
};
