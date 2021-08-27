import Axios, { AxiosInstance } from "axios";
import { PUBLIC_API } from "./constants";

export default class Api {
    public service: AxiosInstance;

    constructor() {
        this.service = Axios.create({
            baseURL: PUBLIC_API,
            responseType: 'json',
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
          })
    }
}