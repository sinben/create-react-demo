import Axios from "axios";



const Http = (axios : any) => {
    const axiosWithHeaders = axios;
    //Here we can add auth with token.
    return {
        get: axiosWithHeaders.get,
        post: axiosWithHeaders.post,
        patch: axiosWithHeaders.patch,
        put: axiosWithHeaders.put,
        delete: axiosWithHeaders.delete
    };
};

export default Http(Axios);