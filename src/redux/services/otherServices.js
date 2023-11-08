import HttpClient from "./http-client";

export const AllHoliday = () => { return HttpClient.get("/merchant/all-holiday"); };

export const UserProfile = () => { return HttpClient.get("/users/profile"); };

export const ChangePassword = (oldPassword, newPassword) => {
    const data = { oldPassword: oldPassword, newPassword: newPassword, };
    return HttpClient.post('/auth/reset-password', data);
};


export const updateUser = (data) => { return HttpClient.post(`/users/${localStorage.getItem('userID')}`, data); };