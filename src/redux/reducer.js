const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case "CONTACTS_LOADED":
      return  { ...state, users: action.payload }
    case "ADD_CONTACT":
      return {...state, users: [...state.users, {name: action.payload.name, surname: action.payload.surname, desc: action.payload.desc, id: action.payload.id}]}   
      case "DELETE_CONTACT":
        return {...state, users: state.users.filter(({id}) => action.payload.id !== id)} 
        case "EDIT_CONTACT":
          return {...state,}
    default: return state;
      
  }
  
};


export default reducer;
