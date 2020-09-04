import React from 'react';

const Content = React.memo(props => {
  const { children } = props;
  return <div>{children}</div>;
});

export default Content;
