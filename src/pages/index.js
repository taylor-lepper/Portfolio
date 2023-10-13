import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from '@/components/ContainerBlock'
// import Projects from "../components/Projects";
// import RecentCode from "../components/RecentCode";
// import Hero from "../components/Hero";



function Home() {
  return (
    <ContainerBlock title="Taylor Lepper - Developer, Creator, Builder" description="Building a portfolio for employment purposes">
      {/* <Hero/>
      <Projects/>
      <RecentCode/> */}
    </ContainerBlock>
  )
}

export default Home;