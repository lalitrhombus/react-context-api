import React from 'react';

const Loading = props => {
  const { show } = props;
  return show && <div>Loading...</div>;
};

export default Loading;
