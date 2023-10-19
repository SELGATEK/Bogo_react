import httpClient from "./http-client";

export const MerchantVoucher = (data) => {
    const headers = {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
    
    return httpClient.post("/merchant/voucher", data, { headers });
};