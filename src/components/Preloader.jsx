import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!loading) return null; // Preloader is removed once the loading is complete.

  return (
    <div id="preloader">
      {/* You can put a spinner or animation here */}
      <div className="spinner"></div>
    </div>
  );
};

export default Preloader;
