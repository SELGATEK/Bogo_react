import HttpClient from "./http-client";

export const Influencers = (name) => {
    return HttpClient.get(`/merchant/influencer${name ? '/?name='+name :''}`);
};

export const InviteInfluencers = (data) => {
    return HttpClient.post(`/merchant/invitation`,data);
};
 