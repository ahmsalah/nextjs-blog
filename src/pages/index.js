import Layout from '@/components/Layout/Layout';
import PostItem from '@/components/PostItem/PostItem';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import Head from 'next/head';

export default function Home({ list }) {
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
            {list.map((post, i) => (
              <PostItem {...post} key={post.id} divider={i < list.length - 1} />
            ))}
          </List>
        </Paper>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  const postsPerPage = 9;
  const page = 1;
  const { data: list } = await axios.get(
    `https://blog-jsonserver.herokuapp.com/posts?_sort=id&_order=desc&_page=${page}&_limit=${postsPerPage}`,
  );
  return {
    props: { list }, // will be passed to the page component as props
  };
}
