import Button from "@material-ui/core/Button";
import axios from "axios";
import Head from "next/head";

export default function Home({ data }) {
  console.log(data);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Hello</div>
      <Button
        sx={{
          "& .MuiButton-label": {
            color: { xs: "common.black", ss: "blue", sm: "common.white", md: "red" },
          },
        }}
        color="secondary"
        variant="contained"
      >
        Hello
      </Button>
    </>
  );
}

export async function getStaticProps(context) {
  const postsPerPage = 9;
  const page = 1;
  const { data } = await axios.get(
    `https://blog-jsonserver.herokuapp.com/posts?_sort=id&_order=desc&_page=${page}&_limit=${postsPerPage}`
  );
  return {
    props: { data }, // will be passed to the page component as props
  };
}
