import HttpClient from "./http-client";

export const CreateUser = data => {
    return HttpClient.post("/auth/register", data);
};





