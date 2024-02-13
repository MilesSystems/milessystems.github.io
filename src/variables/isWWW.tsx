import axiosInstance from "../hoc/axiosInstance";
import isTest from "./isTest";

const isWWW = () => isTest
    ? axiosInstance.defaults.baseURL?.includes("www.") ?? false
    : location.hostname.includes("www.");

export default isWWW