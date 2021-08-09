import { useRouter } from 'next/router'
import FormLayout from "../../components/FormLayout"
import Head from "next/head"


const Post = () => {
    const router = useRouter()
    const { post } = router.query

    return (
        <>
        <Head>
            <title>Blog|post</title>
        </Head>
            <FormLayout>
                {post}Hellow Post!!
            </FormLayout>
        </>
    )
}

export default Post