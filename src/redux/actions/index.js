import axios from "axios";

export const fetchContacts = () => async (dispatch) => {
  const response = await axios.get("http://77.120.241.80:8911/api/users");
  console.log(response);
  dispatch({
    type: "CONTACTS_LOADED",
    payload: response.data,
  });
};

export const addContacts = (name, surname, desc) => async (dispatch) => {
  const response = await axios
    .post("http://77.120.241.80:8911/api/users", { name, surname, desc })
    .then(
      (response) =>
        dispatch({
          type: "ADD_CONTACT",
          payload: {
            name,
            surname,
            desc,
            id: response.data.id,
          },
        })
    );
};

export const deleteContact = (id) => async (dispatch) => {
  const response = await axios

    .delete(`http://77.120.241.80:8911/api/user/${id}`)
    .then(
      (response) =>
        console.log(response) ||
        dispatch({
          type: "DELETE_CONTACT",
          payload: {
            id,
          },
        })
    );
};

export const editContact = (id, name, surname, desc) => async (dispatch) => {
  const response = await axios

    .put(`http://77.120.241.80:8911/api/user/${id}`, { name, surname, desc })
    .then(
      (response) =>
        console.log(response) ||
        dispatch({
          type: "EDIT_CONTACT",
          payload: {
            name,
            surname,
            desc,
            id,
          },
        })
    );
};
