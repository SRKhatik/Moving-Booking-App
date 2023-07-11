import { UnAuthenticated } from "../component/UnAuthenticated/UnAuthenticated";

const AuthHOC =(props)=>{
    //creating Authentication
    const user = localStorage.getItem("userId")
    const token = localStorage.getItem("token")


    if(!token || !user)
        return <UnAuthenticated/>

    return <div>
        {props.children}
    </div>
}
export default AuthHOC;