import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import tasksReducer from "./features/tasks/tasksSlice";
import themeReducer from "./common/themeSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        theme: themeReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
    localStorage.setItem("tasks", JSON.stringify(store.getState().tasks.tasks));
    localStorage.setItem("theme", JSON.stringify(store.getState().theme.darkTheme));
});

export default store;