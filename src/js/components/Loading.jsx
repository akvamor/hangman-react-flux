import React from 'react';
import PropTypes from 'prop-types';

import img from '../../imgs/loading.gif';

const Loading = () => {
  return (
    <div className="loading text-center white">
      <img src={img} alt="Loading..." />
    </div>
  );
};

export default Loading;
