import axios from 'axios';

/**
 * Naudotojo paieška pagal el. pašto adresą
 * @param {*} email
 * @returns objektas user {email, password}
 * @returns stringas "User not found" arba "Unexpected error"
 */
export const getUserByEmail = async (email) => {
  try {
    // Gaunam visus userius is db
    const res = await axios.get(process.env.API_USERS_URL);

    // Ieškom...
    const user = res.data.find((usr) => usr.email === email);

    if (user) {
      return user;
    } else {
      return false;
    }
  } catch (e) {
    return { error: 'Unexpected error' };
  }
};

export const apiRegisterUser = async (formData) => {
  try {
    // 1. Patikrinam, ar nėra jau užsiregistravusio
    // naudotojo su tokiu pačiu el. pašto adresu
    const existingUser = await getUserByEmail(formData.email);

    // Jei yra, siunčiam atgal pranešimą
    if (existingUser.id) return { error: 'This email already registered' };

    // Rašom į db
    const res = await axios.post(process.env.API_USERS_URL, formData);

    return { id: res.data.id };
  } catch (e) {
    return { error: 'Unexpected error' };
  }
};

export const apiLoginUser = async (formData) => {
  try {
    const user = await getUserByEmail(formData.email);
    if (user) {
      const pass = formData.password === user.password;
      if (!pass) {
        return { error: 'Incorrect email or password. Try again or register' };
      }
      return { id: user.id };
    } else {
      return { error: 'Incorrect email or password. Try again or register' };
    }
  } catch (e) {}
};
