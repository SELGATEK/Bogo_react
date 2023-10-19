import HttpClient from "./http-client";

const getAllCategory = () => HttpClient.get("/merchant/category");
const getSubcategory = (categoryId) => HttpClient.get(`/merchant/subcategory/?categoryId=${categoryId}`);

const getCountries = () => HttpClient.get(`/merchant/all-countries`);



const CategoryService = { getAllCategory , getSubcategory , getCountries};
  
  export default CategoryService;