// src/api/register.js or inside your component

import axios from 'axios';

export const registerUser = async () => {
  try {
    const response = await axios.post('https://troxo.runasp.net/api/Users/Register', {
      FirstName: "abdelhady",
      LastName: "Ashraf",
      Email: "mohamed@gmail.com",
      PhoneNumber: "0558055547",
      Password: "10203040",
      ConfirmPassword: "10203040",
      UserTypeId: "a1111111-1111-1111-1111-111111111111", // شركة
      StorePlateformId: "d1111111-0000-0000-0000-111111111111", // سلة
      CommercialRegister: "CommerialRegister",
      CommercialRegisterFile: "", // Leave empty for now
      TaxNumber: "5475445",
      Website: "https://www.abd.com"
    });

    console.log('✅ Registration successful:', response.data);
    return response.data;

  } catch (error) {
    console.error('❌ Registration failed:', error.response?.data || error.message);
    throw error;
  }
};
