import {useRouter} from 'next/router'
let realId = null
export default function Article({article}){
const router = useRouter()
const queryId = router.query.id
realId= router.query.id
return (
    article ? 
    <>
          <h1>{article.title}</h1>
          <span>{article.body}</span>
        </> : null
)
}
Article.getInitialProps = async ({query}) => {
    const {id} = query;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
        }
    })
    const json = await res.json()
    return { article: json}
  }
