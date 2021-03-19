import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import Pagination from '@material-ui/core/Pagination';
import Paper from '@material-ui/core/Paper';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { TransitionGroup } from 'react-transition-group';

import Layout from '@/components/Layout/Layout';
import PostItem from '@/components/PostItem/PostItem';
import API from '@/endpoints';
import snackbar from '@/utils/snackbar';

export default function Posts({ list, pagesCount, page }) {
  const router = useRouter();
  const [posts, setPosts] = useState(list);

  useEffect(() => {
    if (posts?.length === 0) router.reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts]);

  const handleChange = (evt, value) => {
    router.push(`/posts/${value}`);
  };

  const handleDelete = async id => {
    try {
      setPosts(st => st.filter(post => post.id !== id));
      await API.deletePost(id);
      snackbar.toast('Post Deleted');
    } catch (error) {
      snackbar.error('Oops! Something went wrong, please try again.');
    }
  };

  return (
    <Layout>
      <Paper>
        <List>
          <TransitionGroup>
            {posts?.map((post, i) => (
              <Collapse key={post.id}>
                <PostItem {...post} divider={i < list.length - 1} handleDelete={handleDelete} />
              </Collapse>
            ))}
          </TransitionGroup>
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
