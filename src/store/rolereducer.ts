//FILL HERE 3.2
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum role {
    UnknownPersonnel ="Unknown Personnel" ,
    Guest= "Guest" ,
    Student = "Student" ,
    Developer =   "Developer" ,
    ExecutivePersonnel = "Executive Personnel"
}

interface Role {
    roles: role
}
export const roleSlice = createSlice({
    name: "role",
    initialState: 0,
    reducers: {
        setRole: (state: number, action: PayloadAction<number>) => {
        state = action.payload;
      }
    },
  });

  export const { setRole } = roleSlice.actions;
  export default roleSlice.reducer