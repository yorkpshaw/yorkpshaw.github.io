import Head from "next/head";

const Seo = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle} || York Shaw`}
      </title>
    </Head>
  </>
);

export default Seo;
