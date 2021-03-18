import Button from '@material-ui/core/Button';
import React from 'react';

function TestButton() {
  return (
    <Button
      sx={{
        '& .MuiButton-label': {
          color: {
            xs: 'common.black',
            ss: 'blue',
            sm: 'common.white',
            md: 'red',
          },
        },
      }}
      color="secondary"
      variant="contained"
    >
      Hello
    </Button>
  );
}

export default TestButton;
