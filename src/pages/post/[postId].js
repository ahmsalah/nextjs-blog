import { postsPerPage } from '@/config/constants';
import Post from '@/containers/Post/Post';
import API from '@/endpoints';

export default function PostPage(props) {
  return <Post {...props} />;
}

export async function getStaticPaths() {
  const { data: posts } = await API.fetchAllPosts({ page: 1, postsPerPage });
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
  const { data } = await API.fetchPost(postId);

  return {
    props: data, // will be passed to the page component as props
  };
}
