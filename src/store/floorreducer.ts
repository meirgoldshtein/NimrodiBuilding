//FILL HERE 3.1
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum floor {
    "First Floor" ,
     "Second Floor" ,
     "Third Floor" ,
     "Fourth Floor" ,
    "Fifth Floor" ,
}


export const floorSlice = createSlice({
    name: "floor",
    initialState: {
        floorAccess: [false, false, false, false, false]
    },
    reducers: {
        changeAccess: (state: { floorAccess: boolean[] }, action: PayloadAction<number>
        ) => {
            state.floorAccess[action.payload] = true;
            return state
        },
    },
});

export const { changeAccess } = floorSlice.actions;
export default floorSlice.reducer;