import React from 'react';

const Loading = React.memo(props => {
  const { show } = props;
  return show && <div>Loading...</div>;
});

export default Loading;
