import axios from "axios"
import { useEffect } from "react";

export const ApiUrl = import.meta.env.APIURL as string;

const secure = axios.create({
    baseURL: ApiUrl,
    withCredentials: true,
})

function UseAxiosPrivate() {
    // const { logOutUser } = useContext(authContxt);
    useEffect(() => {
        secure.interceptors.response.use((response) => {
            return response;
        }, (error) => {
            if (error.response.status) {
                console.log(error)
                //logOutUser();
            }
        })
    }, [])
    return secure
}

export default UseAxiosPrivate