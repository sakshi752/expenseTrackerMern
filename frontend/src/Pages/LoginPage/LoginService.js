import { toast } from "react-toastify";
import { postService } from "../../ApiServices/PostApiService";
import { ENDPOINTS } from "../../utils";

export const registerUserService = async (requestBody, dispatch) => {
    try {
        const response = await postService(`${ENDPOINTS.USER + ENDPOINTS.REGISTER}`, requestBody);
        const data = await response.json();

        if (response.status === 200) {
            toast.success(data.message ? data.message : "User is registered!")
        } else {
            toast.error(data.message ? data.message : "Something went wrong!")
        }

    } catch (error) {
        toast.error("Internal server error!")
    }
}

export const loginUserService = async () => { }