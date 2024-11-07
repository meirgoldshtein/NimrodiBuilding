import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum RoleType {
    "Unknown Personnel",
    "Guest",
    "Student",
    "Developer",
    "Executive Personnel"
}

interface RoleState {
    role: RoleType;
}

export const roleSlice = createSlice({
    name: "role",
    initialState: { role: RoleType["Unknown Personnel"] } as RoleState,
    reducers: {
        setRole: (state, action: PayloadAction<RoleType>) => {
            console.log(state.role, action.payload);
            state.role = action.payload;
        }
    },
});


  export const { setRole } = roleSlice.actions;
  export default roleSlice.reducer