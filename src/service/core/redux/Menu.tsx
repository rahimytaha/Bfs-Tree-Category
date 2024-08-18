import { createSlice } from '@reduxjs/toolkit';


const Menu =  createSlice({
    name:"Menu",
    initialState:{
        id:0,
        isOpen:false
    },
    reducers:{
        handleEditMenu:(state,action)=>{
            state.id=action.payload.id,
            state.isOpen=action.payload.isOpen
        }
    }
})
export const {handleEditMenu} = Menu.actions;

export default Menu.reducer;