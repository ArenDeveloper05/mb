import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./slices/newsSlice";
import eventsListReducer from "./slices/eventsListSlice";
import stateSupportReducer from "./slices/stateSupportSlice";

const store = configureStore({
  reducer: {
    news: newsReducer,
    eventsList: eventsListReducer,
    stateSupport: stateSupportReducer,
  },
});

export default store;
