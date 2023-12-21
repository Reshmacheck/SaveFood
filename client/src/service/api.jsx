import { useAsyncError } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext} from "react";

const apiURL = import.meta.env.VITE_API_URL;

export async function getAllProduct() {
    const URL = `${apiURL}/product`;

    try {
        const requestInfos = new Request(URL, {
            method: "get",
        });

        const req = await fetch(requestInfos);

        if (!req.ok) {
            throw new Error(`Erreur lors de la récupération des cours : ${req.status}`);
        }

        const res = await req.json();
        return res;
    } catch (error) {
        throw new Error(`Erreur lors de la récupération des cours : ${error.message}`);
    }
}

export async function getProducByRestaurantId(user) {
    // const { user, setUser } = useContext(UserContext);
    // console.log(user)
    const URL = `${apiURL}/product/${user.restaurant_id}`;

    try {
        const requestInfos = new Request(URL, {
            method: "get",
        });
        
        const req = await fetch(requestInfos);

        if (!req.ok) {
            throw new Error(`Erreur lors de la récupération des cours : ${req.status}`);
        }

        const res = await req.json();
        return res;
    } catch (error) {
        throw new Error(`Erreur lors de la récupération des cours : ${error.message}`);
    }
}

export async function getAllRestaurant() {
    const URL = `${apiURL}/restaurant`;
  
    try {
        const requestInfos = new Request(URL, {
            method: "get",
        });

        const req = await fetch(requestInfos);

        if (!req.ok) {
            throw new Error(`Erreur lors de la récupération des cours : ${req.status}`);
        }

        const res = await req.json();
        return res;
    } catch (error) {
        throw new Error(`Erreur lors de la récupération des cours : ${error.message}`);
    }

}

const createProduct = async (data) => {

    const URL = `${apiURL}/product/create`;
    try {
        const requestInfos = new Request(URL, {
            method: "POST",
            body: data,
        });

        const req = await fetch(requestInfos);

        if (!req.ok) {
            throw new Error(`Erreur lors de la récupération des cours : ${req.status}`);
        }

        const res = await req.json();
        return res;
    } catch (error) {
        throw new Error(`Erreur lors de la récupération des cours : ${error.message}`);
    }
}

export  { createProduct }