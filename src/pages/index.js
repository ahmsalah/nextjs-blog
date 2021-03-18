import API from '@/config/axios';
import Posts from '@/containers/Posts/Posts';

export default function Home(props) {
  return <Posts {...props} />;
}

export async function getStaticProps() {
  const postsPerPage = 9;
  const page = 1;
  const { data: list } = await API.get(
    `/posts?_sort=id&_order=desc&_page=${page}&_limit=${postsPerPage}`,
  );
  return {
    props: { list }, // will be passed to the page component as props
  };
}
