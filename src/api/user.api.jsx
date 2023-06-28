import axios from "axios";
import {TOKEN} from "../utils/constants";

const BASE_URL = import.meta.env.VITE_MBA_BACKEND_URL;

export const getAllUsers = async ()=>{
    try{
        const res =await axios.get(`${BASE_URL}/mba/api/v1/users`,{headers:{
            'x-access-token':localStorage.getItem(TOKEN)
        }})
        return res;
    }
    catch(err){
        console.log(err)
    }
}