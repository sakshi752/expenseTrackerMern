import { toast } from "react-toastify";
import { BASE_URL } from "../utils";

export const postService = async (endpoint, body, token) => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...(token && { Authorization: `Bearer ${token}` }),
            },
            body:JSON.stringify(body)
        });
        return await response;

    } catch (error) {
        toast.error("Internal server error!")
    }
}