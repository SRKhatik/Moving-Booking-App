import { UnAuthenticated } from "../component/UnAuthenticated/UnAuthenticated";

const AuthHOC =(props)=>{
    //creating Authentication
    const user = localStorage.getItem("userID")
    const token = localStorage.getItem("token")


    if(!token || !user)
        return <UnAuthenticated/>

    return <div className="d-flex justify-content-center align-items-center">
        {props.children}
    </div>
}
export default AuthHOC;