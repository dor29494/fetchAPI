import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";
import { jsonLdfirstPage } from "../../ldJsons/jsonLd";
export default function FirstPost() {
  return (
    <>
      <Layout
        description={jsonLdfirstPage[0].description}
        keywords={jsonLdfirstPage[0].keywords}
        objTitle={jsonLdfirstPage[0].name}
      >
        <Head>
          <title>{jsonLdfirstPage[0].name}</title>
          <meta property="og:site_name" content="האתר של דור דוד" />
          <meta property="og:locale" content="he_IL" />
          <meta name="description" content={jsonLdfirstPage[0].description} />
          <meta name="keywords" content={jsonLdfirstPage[0].keywords} />
        </Head>
        <h1>אוסף של 8 מתכוני עוגות פאי</h1>
        <div>
          <p>
            <span>
              את מתכון הפאי המהיר והטעים שלפניכם תוכלו להכין ממש כשהאורחים עוד
              רגע בדלת וגם כשאין לכם זמן רב להקדיש להכנת קינוח טעים. זמן ההשקעה
              בהכנה של הקינוח הטעים הזה מועט, אך הטעם והארומה&nbsp;
            </span>
            <span>הנפלאים</span>
            <span>
              &nbsp;שירחפו בחלל החדר, יגרו את כל הסועדים שיחשבו שמדובר במאפה
              מלכים שלוקח שעות רבות להכין אותו. שיהיה בתיאבון!
            </span>
          </p>
        </div>
        <Image
          src="https://cdn.babamail.co.il/images/recipes_source/3216e67b-ffc5-48ec-afd7-45f46fef00ec.jpg" // Route of the image file
          height={250} // Desired size with correct aspect ratio
          width={250} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdfirstPage),
        }}
      />
    </>
  );
}
