import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        const contactName = state.map(contact => contact.name);
        contactName.find(contact => contact === action.payload.name)
          ? alert(`${action.payload.name} is already in contacts`)
          : state.push(action.payload);
      },
      prepare(name, number, id) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload.id);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
