import React from 'react';
import { AuthProvider } from './auth';

const AppProviver: React.FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProviver;
