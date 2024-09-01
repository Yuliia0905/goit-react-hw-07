import axios from "axios";

axios.defaults.baseURL =
  "https://66d068a6181d059277de7cbc.mockapi.io/api/v1/contacts";

export const getContacts = async () => {
  const { data } = await axios.get();
  return data;
};

export const apiAddContact = async (contact) => {
  const { data } = await axios.post("", contact);
  return data;
};

export const apiDeleteContact = async (contactId) => {
  const { data } = await axios.delete(`/${contactId}`);
  return data;
};
