import httpClient from "./http-client";

export const MerchantVoucher = (data) => {
    const formData = new FormData();
    const token = localStorage.getItem('token')
    for (const key in data) {
        formData.append(key, data[key]);
    }
    
    const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
    };
    
    return httpClient.post("/merchant/voucher", formData, { headers });
};