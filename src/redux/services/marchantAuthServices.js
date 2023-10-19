import HttpClient from "./http-client";

export const CreateMerchant = data => {
    return HttpClient.post("/merchant/register", data);
};

export const LoginMerchant = data => {
    return HttpClient.post("/merchant/login", data);
  };


 
export const RequestOtp = data => {
    return HttpClient.post("/merchant/requestOtp", data);
};

export const VerifyOtp = data => {
    return HttpClient.post("/merchant/verifyOtp", data);
};



export const ResetPassword = token  => {
    console.log('token is send by paramsssssssssssssssss:', token);
    return HttpClient.post(`/merchant/reset-password?token=${token}`);
};


export const BusinessMerchant = (data) => {
  const formData = new FormData();
  const token = localStorage.getItem('token')
 
  for (const key in data) {
    if (data[key] && typeof data[key] === 'object') { 
      formData.append(key, JSON.stringify(data[key]));
    } else { 
      formData.append(key, data[key]);
    }
  }

  const headers = {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${token}`
  };

  return HttpClient.post("/merchant/business", formData, { headers });
};



export const CampaignCreate = (data) => { 
  const token = localStorage.getItem('token')
 
  const headers = { 
    'Authorization': `Bearer ${token}`
  };

  return HttpClient.post("/merchant/campaign", data, { headers });
};

export const VoucherCreate = (data) => { 
  const token = localStorage.getItem('token')
 
  const headers = {
    'Authorization': `Bearer ${token}`
  };

  return HttpClient.post("/merchant/voucher", data, { headers });
};


export const AllBusinessDetails = () => { 
  const token = localStorage.getItem('token')
  const headers = {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${token}`
  };
  return HttpClient.get("/merchant/business",{ headers });
};