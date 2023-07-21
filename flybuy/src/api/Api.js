import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
    headers:{
        'Content-Type': 'multipart/form-data'
    }
});

const config = {
    headers:{
        'Authorization' : `Beaer ${localStorage.getItem("token")}`,
    }
}

// test / route
export const testApi = () => Api.get("/");

// register route
export const registerApi = (data) => Api.post("/api/users/register",data)

//login route
export const loginApi = (data) => Api.post("/api/users/login",data)

// product create route
export const productCreateApi = (data) => Api.post("/api/products/create",data, config)


// get all products route
export const getAllProductsApi = () => Api.get("/api/products/get_products")

// get single product route
export const getSingleProductApi = (id) => Api.get(`/api/products/get_product/${id}`)


// update product route
export const updateProductApi = (id,data) => Api.put(`/api/products/update_product/${id}`, data,config)


// delete product route
export const deleteProductApi = (id) => Api.delete(`/api/products/delete_product/${id}`,config)