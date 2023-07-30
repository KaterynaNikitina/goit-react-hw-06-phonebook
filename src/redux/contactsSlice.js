import { createSlice } from "@reduxjs/toolkit";

const contactIinitialState = {
    contacts: [],
  };

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactIinitialState,
    reducers: {
        addContact: (state, action) => {
            state.contacts = [...state.contacts, action.payload]
            }
        },
        removeContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
            }
    }, // Add your reducer functions here

);

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
