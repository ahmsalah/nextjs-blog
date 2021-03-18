import List from '@material-ui/core/List';
import Pagination from '@material-ui/core/Pagination';
import Paper from '@material-ui/core/Paper';
import { useRouter } from 'next/router';

import Layout from '@/components/Layout/Layout';
import PostItem from '@/components/PostItem/PostItem';

export default function Posts({ list, pagesCount, page }) {
  const router = useRouter();

  const handleChange = (evt, value) => {
    router.push(`/posts/${value}`);
  };

  return (
    <Layout>
      <Paper>
        <List>
          {list?.map((post, i) => (
            <PostItem {...post} key={post.id} divider={i < list.length - 1} />
          ))}
        </List>
        <Pagination
          sx={{ padding: 3, display: 'flex', justifyContent: 'center' }}
          onChange={handleChange}
          page={+page}
          count={pagesCount}
        />
      </Paper>
    </Layout>
  );
}
