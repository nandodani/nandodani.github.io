import React from 'react';
import './LoadingBar.styles.css';

const LoadingBar = ({ loading }) => {
  return (
    <div className={`loading-bar ${loading ? 'loading' : 'loading-complete'}`}>
      <div className="bar"></div>
    </div>
  );
};

export default LoadingBar;
