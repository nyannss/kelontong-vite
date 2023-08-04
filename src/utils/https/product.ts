import api from './base';

export const getAllProducts = (page: number = 1) => {
  return api.get("/product", {
    params: {
      page,
    },
  });
};
