import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";
import { videoLD } from "../../ldJsons/jsonLd";
import YoutubeEmbed from "../../public/video/youTubeEmbed";
export default function videoPost() {
  let des =
    "מסתבכים עם סידור סדינים על מיטתכם? אתם מוזמנים להכיר 22 פתרונות מגניבים לבעיות שונות שנועדו להקל על חייכם משמעותית ";

  return (
    <>
      <Layout
        keywords={videoLD[0].keywords}
        description={des}
        objTitle={videoLD[0].headline}
      >
        <Head>
          <title>{videoLD[0].headline}</title>
          <meta property="og:site_name" content="האתר של דור דוד" />
          <meta property="og:locale" content="he_IL" />
          <meta name="description" content={des} />
          <meta name="keywords" content={videoLD[0].keywords} />
        </Head>
        <div>
          <h1>22 דרכים מדליקות להפוך את החיים לקלים ונוחים יותר</h1>
        </div>
        <YoutubeEmbed embedId={"MtG8Z0B87Fk".toString()} />
      </Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoLD),
        }}
      />
    </>
  );
}
