import React, { memo } from 'react';
import Box from '@material-ui/core/Box';

function Layout({ children }) {
  return (
    <Box component="div">
      {/* <Header /> */}
      <Box
        component="div"
        sx={{
          py: 4,
          px: 3,
          maxWidth: 90 * 8,
          my: 4,
          mx: 'auto',
        }}
      >
        {children}
      </Box>
      {/* <Footer /> */}
    </Box>
  );
}

export default memo(Layout);
