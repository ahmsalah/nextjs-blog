import Layout from '@/components/Layout/Layout';
import PostItem from '@/components/PostItem/PostItem';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';

export default function Posts({ list }) {
  return (
    <Layout>
      <Paper>
        <List>
          {list?.map((post, i) => (
            <PostItem {...post} key={post.id} divider={i < list.length - 1} />
          ))}
        </List>
      </Paper>
    </Layout>
  );
}
