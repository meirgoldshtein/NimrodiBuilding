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
        changeAccess: (state: { floorAccess: boolean[] }, action: PayloadAction<{ index: number, value: boolean }>
        ) => {
            state.floorAccess[action.payload.index] = action.payload.value;
        },
    },
});

export const { changeAccess } = floorSlice.actions;
export default floorSlice.reducer;