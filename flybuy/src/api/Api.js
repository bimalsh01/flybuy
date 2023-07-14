import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
    headers:{
        'Content-Type': 'multipart/form-data'
    }
});

// test / route
export const testApi = () => Api.get("/");

// register route
export const registerApi = (data) => Api.post("/api/users/register",data)

//login route
export const loginApi = (data) => Api.post("/api/users/login",data)

// product create route
export const productCreateApi = (data) => Api.post("/api/products/create",data)
