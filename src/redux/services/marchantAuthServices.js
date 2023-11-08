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



export const ResetPassword = data  => {
    console.log('token is send by params:', data.token);

    

    return HttpClient.post(`/merchant/reset-password?token=${data.token}`, {password: data.newPassword});
};


export const BusinessMerchant = (data) => {
  const formData = new FormData();
  const token = localStorage.getItem('token')
 
  for (const key in data) {
    if (data[key] && typeof data[key] === 'object' && key != "logo" && key != "banner" && key != "gallery") { 
      formData.append(key, JSON.stringify(data[key]));

    } else { 
      if( key == "gallery"){
        data[key].forEach((image, index) => { 
            formData.append(`gallery`, image);
        });
      }
 
      formData.append(key, data[key]);
    }
  }

  const headers = {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${token}`
  };

  return HttpClient.post("/merchant/business", formData, { headers });
};


export const CampaignCreate = (data) => { return HttpClient.post("/merchant/campaign", data); };
export const VoucherCreate = (data) => { return HttpClient.post("/merchant/voucher", data ); };
export const AllBusinessDetails = () => { return HttpClient.get("/merchant/business"); };
export const getBusinessVoucher = (id) => { return HttpClient.get(`/merchant/voucher/?businessId=${id}`); };
export const getBusinessCampaign = (id) => { return HttpClient.get(`/merchant/campaign/?businessId=${id}`); };
