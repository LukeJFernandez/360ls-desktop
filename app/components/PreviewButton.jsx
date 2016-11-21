import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const PreviewButton = ({ togglePreview, isPreview }) => {
  const startButton = (
    <RaisedButton
      label="Preview"
      primary
      fullWidth
      onClick={() => togglePreview()}
    />
  );

  const stopButton = (
    <RaisedButton
      label="Stop"
      secondary
      fullWidth
      onClick={() => togglePreview()}
    />
  );

  return (
    <div>
      {isPreview ? stopButton : startButton}
    </div>
  );
};

PreviewButton.propTypes = {
  togglePreview: PropTypes.func.isRequired,
  isPreview: PropTypes.bool.isRequired,
};

export default PreviewButton;