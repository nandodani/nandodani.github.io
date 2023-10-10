import React, { useState, useEffect } from 'react';
import './WelcomePage.styles.css';
import LoadingBar from '../LoadingBar/LoadingBar';

const WelcomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule um carregamento demorado
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);

  return (
    <div className="welcome-page">
      <LoadingBar loading={loading} />
      <div className={`content ${!loading ? 'fade-in' : ''}`}>

      </div>
    </div>
  );
};

export default WelcomePage;
