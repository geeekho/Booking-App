import { configureStore } from "@reduxjs/toolkit";

import listingReducer from "./slice/listingsSlice";

export const store = configureStore({
  reducer: {
    listings: listingReducer,
  },
});
