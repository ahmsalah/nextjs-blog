import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import Pagination from '@material-ui/core/Pagination';
import Paper from '@material-ui/core/Paper';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { TransitionGroup } from 'react-transition-group';

import Layout from '@/components/Layout/Layout';
import PostForm from '@/components/PostForm/PostForm';
import PostItem from '@/components/PostItem/PostItem';
import { snackbarErrorMsg } from '@/config/constants';
import API from '@/endpoints';
import snackbar from '@/utils/snackbar';

export default function Posts({ list, pagesCount, page }) {
  const router = useRouter();
  const [posts, setPosts] = useState(list);

  useEffect(() => {
    if (posts?.length === 0) router.reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts]);

  const handleChangePagination = (evt, value) => {
    router.push(`/posts/${value}`);
  };

  const deletePost = async id => {
    const oldPosts = [...posts];
    try {
      setPosts(st => st.filter(post => post.id !== id));
      await API.deletePost(id);
      snackbar.toast('Post Deleted');
    } catch (error) {
      setPosts(oldPosts);
      snackbar.error(snackbarErrorMsg);
    }
  };

  const addPost = async fields => {
    const oldPosts = [...posts];
    try {
      const newPost = {
        userId: 1,
        id: Date.now(),
        ...fields,
      };
      setPosts(st => [newPost, ...st]);
      await API.addPost(newPost);
      snackbar.toast('New Post Added');
    } catch (error) {
      setPosts(oldPosts);
      snackbar.error(snackbarErrorMsg);
    }
  };

  const editPost = async (id, fields) => {
    const oldPosts = [...posts];
    try {
      setPosts(st => st.map(post => (post.id === id ? { ...post, ...fields } : post)));
      await API.editPost(id, fields);
      snackbar.toast('Post Updated');
    } catch (error) {
      setPosts(oldPosts);
      snackbar.error(snackbarErrorMsg);
    }
  };

  return (
    <Layout>
      <Paper>
        <PostForm addPost={addPost} />
        <List>
          <TransitionGroup>
            {posts?.map((post, i) => (
              <Collapse key={post.id}>
                <PostItem
                  {...post}
                  divider={i < list.length - 1}
                  deletePost={deletePost}
                  editPost={editPost}
                />
              </Collapse>
            ))}
          </TransitionGroup>
        </List>
        <Pagination
          sx={{ padding: 3, display: 'flex', justifyContent: 'center' }}
          onChange={handleChangePagination}
          page={+page}
          count={pagesCount}
        />
      </Paper>
    </Layout>
  );
}
