import { BASE_URL } from "../utils"

export const putService = async (endpoint, body, token, headers = {}) => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                ...(token && { Authorization: `Bearer ${token}` }),
            },
            body: JSON.stringify(body),
        })
        return await response;
    } catch (error) {
        toast.error("Internal server error!")
    }
}