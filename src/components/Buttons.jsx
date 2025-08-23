import React from 'react';

const Buttons = () => {
  return (
    <div className="flex gap-4 justify-center flex-wrap mb-12">
      <a 
        href="https://github.com/inkFusionLabs/OmniFusionMusic/releases" 
        className="btn btn-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        📥 Download
      </a>
      <a 
        href="https://github.com/inkFusionLabs/OmniFusionMusic" 
        className="btn btn-secondary"
        target="_blank"
        rel="noopener noreferrer"
      >
        🔧 View Source
      </a>
    </div>
  );
};

export default Buttons; 