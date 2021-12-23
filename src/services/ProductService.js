import http from './http-config';

const getAll = ()=> {
  return http.get("/product/all");
}

const create = (data)=> {
  return http.post(`/product/new`, data);
}

const findByPrice = (price) => {
  return http.get(`/product/price/${price}`);
}

const getByWord=(word)=>{
  return http.get(`/product/description/${word}`);
}
const exportedObject = {
  getAll,
  create,
  findByPrice,
  getByWord
}
export default exportedObject;

  
