import Button from '@mui/material/Button';
import React from 'react';

const BackButton = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <Button color="secondary" onClick={goBack}>
      Back
    </Button>
  );
};

export default BackButton;