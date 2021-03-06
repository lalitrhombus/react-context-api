import React from 'react';

const MainButton = React.memo(props => {
  const { children, onClick } = props;
  // eslint-disable-next-line react/button-has-type
  return <button onClick={onClick}>{children}</button>;
});

export default MainButton;
