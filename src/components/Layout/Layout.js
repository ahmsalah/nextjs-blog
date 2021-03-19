import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useRouter } from 'next/router';
import React, { memo, useEffect, useState } from 'react';

function Layout({ children }) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);
  return (
    <Box sx={{ position: 'relative' }}>
      {/* <Header /> */}
      {pageLoading && <LinearProgress sx={{ position: 'absolute', top: 0, left: 0, right: 0 }} />}
      <Box
        sx={{
          py: 8,
          px: 3,
          maxWidth: 90 * 8,
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
