import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./slices/newsSlice";
import eventsListReducer from "./slices/eventsListSlice";
import stateSupportReducer from "./slices/stateSupportSlice";
import adminReducer from "./slices/adminSlice";

const store = configureStore({
  reducer: {
    news: newsReducer,
    eventsList: eventsListReducer,
    stateSupport: stateSupportReducer,
    admin: adminReducer,
  },
});

export default store;
