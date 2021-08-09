import '../index.css'
import Head from 'next/head'
const App = ({ Component }) => {

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                <link href="https://fonts.googleapis.com/css2?family=Style+Script&display=swap" rel="stylesheet" />
            </Head>
            start
            <Component />
            End
        </>
    )
}

export default App