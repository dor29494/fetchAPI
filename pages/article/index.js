import {useRouter} from 'next/router'
import Link from "next/link";
export default function ArticleList({articles}){
const router = useRouter()

return (
    <>
  <ul>
        {articles.map((article,i) =>(
          <li key={i}>
          <Link as={`/article/${article.id}`} href={`article/[${article.id}]`}>
          <a>{`Go to ${article.title}`}</a>
          </Link>
          </li>
        ))}
        </ul>
</>
)

}
ArticleList.getInitialProps = async (ctx) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
        }
    })
    const json = await res.json()
    return { articles: json}
  }