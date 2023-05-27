import About from "../containers/About";
import Landing from "../containers/Landing";
import Credentials from "../containers/Credentials";
import Portfolio from "../containers/Portfolio";
import Contact from "../containers/Contact";
import axios from "axios";
import { eachHourOfInterval } from "date-fns";
import Head from "next/head";

type repositories = Array<Object>;
interface ILandingProps {
  repositories: repositories;
}

const Index = ({ repositories }: ILandingProps) => {
  const start = new Date("2021-02-17T00:00");
  const end = new Date();
  const interval = eachHourOfInterval({ start, end });

  return (
    <>
      <Head>
        <title>Leonardo Agostini</title>
        <link
          rel="shortcut icon"
          href="https://lh3.googleusercontent.com/a/AAcHTtevn1H1LkQrNC9O1ZeUWhLVmHyiR5qohpbEK_v42w=s96-c-rg-br100"
        />
      </Head>
      <Landing />
      <About />
      <Credentials />
      <Portfolio
        coffeCups={interval.length / 12}
        repositories={repositories.length}
        workedHours={interval.length / 3}
      />
      <Contact />
    </>
  );
};

export const getStaticProps = async () => {
  const response = await axios.get(
    "https://api.github.com/users/leo-byte-rgb/repos"
  );

  if (!response.data) {
    return {
      notFound: true,
    };
  }

  const repositories = response.data;
  return {
    props: {
      repositories,
    },
    revalidate: 60 * 60 * 24 * 7, // 7 days in seconds
  };
};

export default Index;
