import axios from "axios";
import appContext from "../appContext";
import { useContext } from "react";


export class BaseService {
    httpClient = axios.create({ baseURL: "http://localhost:4000/"})
    token = useContext(appContext)
    constructor() {
        this.httpClient.interceptors.request.use((request) => {
            if (!request.headers?.authorization) {
                request.headers = { user: this.token.token, ...request.headers };
            }

            return request;
        });
}
}