import RestApi from "./rest-api";

const apiUrl = () => 'http://localhost:5000';

const list = () => RestApi.get(`${apiUrl()}/imps`)
    .then((response: any) => response)
    .catch((error: any) => {
        throw error;
    });

const service = { list };

export default service;