import React from 'react';

import { useStateValue } from '../state';
import { logout } from '../state/auth/actions';

import Button from './button';

const Header = () => {
  const [{ auth }, dispatch] = useStateValue();

  const handleLogout = async () => {
    await dispatch(logout());
  };

  return (
    <nav>
      <header>Header</header>
      <sidebar>
        {auth.logged && (
          <Button gradient onClick={() => handleLogout()}>
            Logout
          </Button>
        )}
      </sidebar>
    </nav>
  );
};

export default Header;
