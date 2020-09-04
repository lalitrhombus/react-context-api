import React, { useEffect } from 'react';

import { useStateValue } from '../state';
import { logout } from '../state/auth/actions';

import Button from './button';

const Header = React.memo(() => {
  const [{ auth }, dispatch] = useStateValue();

  useEffect(() => {
    console.log('i am header component..');
  }, [auth]);

  const handleLogout = async () => {
    await dispatch(logout());
  };

  return (
    <nav>
      <header>Header</header>
      <aside>
        {auth.logged && (
          <Button gradient onClick={() => handleLogout()}>
            Logout
          </Button>
        )}
      </aside>
    </nav>
  );
});

export default Header;
