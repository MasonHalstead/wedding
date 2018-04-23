import React from 'react';
import ReactDelayRender from 'react-delay-render';

const Loading = (props) => {

  return (
    <div className="component-container text-center">
      <p><i className="fas fa-spinner fa-spin"></i> Loading...</p>
    </div>
  );
};

export default ReactDelayRender({ delay: 300 })(Loading);

