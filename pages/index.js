import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home({ssrWorking, randomPage}) {
  return (
    <>
    {
      ssrWorking ?
      <Layout home
      randomPage={randomPage}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey my name is Dor David Sharabi and i try to build a next.js app!</p>
      </section>
      
    </Layout> :
    <h2>SSR not working</h2>
    }
    </>
  
  )
}

export async function getServerSideProps() {
  return { props: { ssrWorking: true ,randomPage: Math.floor(Math.random() * 95) + 1} };
}