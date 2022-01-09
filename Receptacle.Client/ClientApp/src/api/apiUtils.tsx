import { toast } from "react-toastify";

export async function handleResponse(response: Response) {
    if (response.ok) {
        return response.json();
    }
    if (response.status === 400) {
        // So, a server-side validation error occurred.
        // Server side validation returns a string error message, so parse as text instead of json.
        const error: string = await response.text();
        throw new Error(error);
    }
    throw new Error("Network response was not ok.");
}

export function handleError(error: string) {
    console.error("API call failed. " + error);
    toast.error("API call failed. " + error, {autoClose: 10000});
    throw error;
}
