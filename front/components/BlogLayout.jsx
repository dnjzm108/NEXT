import Link from "next/link"
import Navtoggle from './NavToggle'

const BlogLayout = ({ children }) => {

    return (
        <>
            <div className="header">
                <h1>로고</h1>

                <ul>
                    <li>
                        <Link href="/">
                            <a>home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/login">
                            <a>login</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/join">
                            <a>join</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts/post">
                            <a>post</a>
                        </Link>
                    </li>
                </ul>
                <Navtoggle>
                    
                </Navtoggle>
            </div>

            <div className="conatiner">
                {children}
            </div>

            <div className="footer">
                copyright &copy; all reserved
            </div>
        </>
    )
}
export default BlogLayout