import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";
import themeReducer from "./themeSlice";

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        theme: themeReducer,
    },
});

store.subscribe(() => {
    localStorage.setItem("tasks", JSON.stringify(store.getState().tasks.tasks));
    localStorage.setItem("theme", JSON.stringify(store.getState().theme.darkTheme));
});

export default store;