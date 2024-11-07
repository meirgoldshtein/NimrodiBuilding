import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import roles from "../data/roles.json";

interface RoleState {
    role: string;
}

export const roleSlice = createSlice({
    name: "role",
    initialState: "Unknown Personnel" ,
    reducers: {
        setRole: (state: string , action: PayloadAction<number>) => {       
            state = roles[action.payload];
            return state
        }
        
    },
});


  export const { setRole } = roleSlice.actions;
  export default roleSlice.reducer