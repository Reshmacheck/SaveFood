import { useAsyncError } from "react-router-dom";



export async function getAllProduct() {
    const URL = "https://localhost:3000/api/product";

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
    const URL = "https://localhost:3000/api/restaurant";
  
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