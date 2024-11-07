// FILL HERE 3.3
import { configureStore } from "@reduxjs/toolkit";
import { floorSlice } from "./floorreducer";
import { roleSlice } from "./rolereducer";


export default configureStore({
  reducer: {
    floorAccess: floorSlice.reducer,
    role: roleSlice.reducer,
  },
});

