import {useRouter} from 'next/router'
import Link from 'next/link'
import firstPost from "./first-post"
import articlePost from "./article-post"
import videoPost from "./video-post"
import Layout from "../../components/layout"
import {PageArray} from "../../ldJsons/demo"
export default function Post(){
const router = useRouter()
const queryId = router.query.id
console.log(queryId)
const choosenObj = PageArray.filter(post=> post.id == queryId)[0]
console.log(choosenObj)
return <h2>{choosenObj ? choosenObj.name : 'No object found' }</h2>

}
