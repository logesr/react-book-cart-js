import {createContext, useContext} from 'react';

export const BookCartContext = createContext(null);
export const useBookCartProps = () => useContext(BookCartContext);