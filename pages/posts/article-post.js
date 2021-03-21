import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";
import { articleLD } from "../../ldJsons/jsonLd";

export default function articlePost() {
  let des =
    "רציתם לשחק עם הכלב שעבר מולכם בגינה או ברחוב? רגע לפני שאתם רצים אליו, הכירו 10 טיפים שיעזור לו להתחבר אליכם טוב יותר";
  
  return (
    <>
      <Layout
        description={des}
        objTitle={articleLD[0].headline}
        keywords={articleLD[0].keywords}
      >
        <Head>
          <title>
            איך להתחבר עם כלבים? 10 עצות של וטרינרים - בא-במייל דברים שכדאי לדעת
          </title>
          <meta property="og:site_name" content="האתר של דור דוד" />
          <meta property="og:locale" content="he_IL" />
          <meta name="description" content={des} />
          <meta name="keywords" content={articleLD[0].keywords} />
        </Head>
        <h1>{articleLD[0].headline}</h1>
        <div>
          <p>
            <span>{articleLD[0].articleBody}</span>
          </p>
        </div>
        <h2>
          <span>1. אל תמהרו לומר שלום</span>
        </h2>
        <div>
          <span>
            התעורר בכם דחף להגיד להגיד שלום לכלב חמוד שפגשתם בגינה השכונתית או
            ברחוב? התאפקו לרגע לפני שתפעלו. לפי סופיה יין, וטרינרית אמריקאית
            וחוקרת התנהגות של בעלי חיים, אם תיגשו אל כלב פתאום כדי ללטף אותו,
            אתם עלולים להפחיד אותו. יש בכך היגיון רב, כי אם תחשבו על כך לרגע, גם
            אתם הייתם נבהלים אם אדם זר היה מגיע פתאום ומחבק אתכם ברחוב או אפילו
            מנסה לפתח איתכם שיחה. לכן במקום להפחיד את הכלב הזר גשו אליו לאט
            וברוגע – כך הוא ירגיש בטוח ולא יחשוש שאתם עלולים לפגוע בו או בבעלים
            שלו.
          </span>
        </div>
        <h2>
          <span>2. בקשו מהבעלים רשות</span>
        </h2>
        <div>
          <span>
            טעות נפוצה נוספת עושים כשהם פוגשים כלב חדש, היא לגעת בו בלי שום הכנה
            מוקדמת. אם גם אתם מבצעים אותה – אנחנו לא יכולים להאשים אתכם, כי חיות
            המחמד האהובות האלו באמת דורשות חיבוק אוהב, אך עליכם לעשות זאת אך ורק
            לאחר קבלת הסכמה מהבעלים. מעבר לכך שתהיו מנומסים יותר, גם תוכלו לדעת
            האם הכלב שמולכם תוקפני או לחלופין שעליכם לגשת אליו בדרך מסוימת.
            בנוסף לכך, בקשת רשות מהבעלים תגרום לכלב לחוש יותר בטוח לידכם, כך לפי
            ד"ר יין.
          </span>
        </div>
      </Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleLD),
        }}
      />
    </>
  );
}
