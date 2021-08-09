import BlogLayout from "../components/BlogLayout"
import Head from "next/head"

const Index = () => {
    return (
        <>
        <Head>
            <title>Blog</title>
        </Head>
            <BlogLayout>
                Hellow world!!

                <div>
                    <img src="/1.png" />
                </div>
            </BlogLayout>
        </>
    )
}

export default Index