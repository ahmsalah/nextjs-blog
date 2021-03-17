import Posts from '@/containers/Posts/Posts';
import axios from 'axios';

export default function Home(props) {
  return <Posts {...props} />;
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
