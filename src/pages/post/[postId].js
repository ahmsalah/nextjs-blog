import API from '@/config/axios';
import { postsPerPage } from '@/config/constants';
import Post from '@/containers/Post/Post';

export default function PostPage(props) {
  return <Post {...props} />;
}

export async function getStaticPaths() {
  const { data: posts } = await API.get(
    `/posts?_sort=id&_order=desc&_page=1&_limit=${postsPerPage}`,
  );
  const paths = posts.map(post => ({
    params: { postId: `${post.id}` },
  }));
  // Return a list of possible value for id
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { postId } }) {
  const { data } = await API.get(`/posts/${postId}`);

  return {
    props: data, // will be passed to the page component as props
  };
}
