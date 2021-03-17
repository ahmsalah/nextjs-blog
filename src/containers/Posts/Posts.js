import Layout from '@/components/Layout/Layout';
import PostItem from '@/components/PostItem/PostItem';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Head from 'next/head';

export default function Posts({ list }) {
  console.log(list);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Paper>
          <List>
            {list?.map((post, i) => (
              <PostItem {...post} key={post.id} divider={i < list.length - 1} />
            ))}
          </List>
        </Paper>
      </Layout>
    </>
  );
}
