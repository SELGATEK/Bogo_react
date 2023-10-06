import HttpClient from "./http-client";

export const CreateMerchant = data => {
    return HttpClient.post("/merchant/register", data);
  };

  export const LoginMerchant = data => {
    return HttpClient.post("/merchant/login", data);
  };


  export const BusinessMerchant = data => {
    return HttpClient.post("/merchant/business", data);
  };