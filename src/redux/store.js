import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./slices/newsSlice";
import eventsListReducer from "./slices/eventsListSlice";

const store = configureStore({
  reducer: {
    news: newsReducer,
    eventsList: eventsListReducer,
  },
});

export default store;
