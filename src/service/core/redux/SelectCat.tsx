import { createSlice } from '@reduxjs/toolkit';


const SelectCat =  createSlice({
    name:"SelectCat",
    initialState:{
        data:[]
    },
    reducers:{
        handleEditSelectCat:(state,action)=>{
            state.data=action.payload.data
        }
    }
})

export const {handleEditSelectCat} = SelectCat.actions;

export default SelectCat.reducer;