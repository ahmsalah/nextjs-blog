import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import MuiLink from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import Layout from '@/components/Layout/Layout';

function Post({ title, body }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout>
      <Breadcrumbs aria-label="breadcrumb">
        <Link href="/posts/1" passHref>
          <MuiLink sx={{ display: 'flex' }} color="inherit">
            <HomeIcon
              sx={{
                mr: 0.5,
                width: 20,
                height: 20,
              }}
            />
            Posts
          </MuiLink>
        </Link>

        <Typography color="textPrimary">{title}</Typography>
      </Breadcrumbs>
      <Paper sx={{ p: 6, my: 4 }}>
        <Typography sx={{ mb: 4 }} variant="h4" component="h1">
          {title}
        </Typography>
        <Typography>{body}</Typography>
      </Paper>
    </Layout>
  );
}

export default Post;
