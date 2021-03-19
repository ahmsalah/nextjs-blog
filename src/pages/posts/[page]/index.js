import API from '@/config/axios';
import { postsPerPage } from '@/config/constants';
import Posts from '@/containers/Posts/Posts';

export default function Home(props) {
  return <Posts {...props} />;
}

const getPagesCount = count => Math.ceil(count / postsPerPage, 10);

export async function getServerSideProps({ params: { page } }) {
  const {
    data: list,
    headers: { ['x-total-count']: count },
  } = await API.get(`/posts?_sort=id&_order=desc&_page=${page}&_limit=${postsPerPage}`);
  const pagesCount = getPagesCount(count);

  return {
    props: { list, pagesCount, page }, // will be passed to the page component as props
  };
}
