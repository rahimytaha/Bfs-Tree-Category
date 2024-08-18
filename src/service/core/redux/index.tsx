import { configureStore } from "@reduxjs/toolkit";
import Menu from "./Menu"
import SelectCat from './SelectCat';

export const store =configureStore({
    reducer:{
        Menu:Menu,
        SelectCat :SelectCat
    }
})