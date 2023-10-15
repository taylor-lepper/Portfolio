import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import Projects from "../components/Projects";
import RecentCode from "../components/RecentCode";
import Hero from "../components/Hero";
import getRecentRepos from "../lib/getRecentRepos";
import userData from "../constants/data";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Taylor Lepper - Developer, Builder, Visionary, Creator"
      description="This is a developer portfolio designed to get a job."
    >
      <Hero />
      <Projects />
      <RecentCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getRecentRepos(userData, token);
  console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};