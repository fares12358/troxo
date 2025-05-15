import http from './http'; // make sure http is an axios instance

export const registerBusiness = (formData) => {
  return http.post('/Users/Register', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};
