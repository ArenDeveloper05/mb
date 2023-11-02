import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./slices/newsSlice";
import eventsListReducer from "./slices/eventsListSlice";
import stateSupportReducer from "./slices/stateSupportSlice";
import adminReducer from "./slices/adminSlice";
import menuReducer from "./slices/menuSlice";

const store = configureStore({
  reducer: {
    news: newsReducer,
    eventsList: eventsListReducer,
    stateSupport: stateSupportReducer,
    admin: adminReducer,
    menu: menuReducer,
  },
});

export default store;
