import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import {PageArray} from "../ldJsons/demo"
const name = "Dor Sharabi";
export const siteTitle = "Next.js practice site";

export default function Layout({ children, home,description,keywords,objTitle,randomPage }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content={description}
          />
          <meta
          name="keywords"
          content={keywords}/>
          <meta name="og:title" content={objTitle ? objTitle : siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/avatar.png"
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {home ? 
        <ul>
        {PageArray.map((post,i) =>(
          <li key={i}>
          <Link as={`/posts/${post.id}`} href={`posts/[${post.postType}]`}>
          <a>{`Go to ${PageArray[i].postType}`}</a>
          </Link>
          </li>
        ))}
        <li> 
        <Link as={`/article/${randomPage}`} href={`article/${randomPage}`}>
        <a>{`Go to article DB`}</a>
          </Link>
        </li>
        </ul>
          // <div className={styles.backToHome}>
          //   <Link href="/posts/[id]" as="/posts/first-post">
          //     <a>← Go to firstPost</a>
          //   </Link>
          //   <Link href="/posts/[id]" as="/posts/article-post">
          //     <a>← Go to Article page</a>
          //   </Link>
          //   <Link href="posts/[id]" as="/posts/video-post">
          //     <a>← Go to video page</a>
          //   </Link>
          // </div>
        : (
            <div className={styles.backToHome}>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          ) }
      </div>
    </>
  );
}