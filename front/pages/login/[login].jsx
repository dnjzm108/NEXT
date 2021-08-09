import {useRouter} from 'next/router'

const Login = () =>{
const router = useRouter()
const {login} =router.query
    return(
        <>
        <h1>{login}하하하 성공??</h1>
        </>
    )
}

export default Login