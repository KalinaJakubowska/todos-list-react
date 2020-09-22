import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: JSON.parse(localStorage.getItem("tasks")) || [],
        isHidingEnabled: false,
        exampleTasksLoading: false,
        query: "",
    },
    reducers: {
        addTasks: ({ tasks }, { payload }) => {
            payload.forEach(task => tasks.push(task));
        },
        toggleTaskDone: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(task => task.id === payload);
            tasks[index].done = !tasks[index].done;
        },
        deleteTask: (state, { payload }) => {
            state.tasks = state.tasks.filter(task => task.id !== payload);
        },
        doAllTasks: (state) => {
            state.tasks = state.tasks.map(task => ({ ...task, done: true }));
        },
        removeAllTasks: (state) => {
            state.tasks = [];
        },
        toggleIsHidingEnabled: state => {
            state.isHidingEnabled = !state.isHidingEnabled;
        },
        editTask: ({ tasks }, { payload: { id, name } }) => {
            const index = tasks.findIndex(task => task.id === id);
            tasks[index].name = name;
        },
        fetchExampleTasks: () => {
        },
        setExampleTasksLoading: (state, { payload }) => {
            state.exampleTasksLoading = payload;
        },
        setQuery: (state, { payload: query }) => {
            state.query = query;
        },
    },
});

export const {
    addTasks,
    toggleIsHidingEnabled,
    toggleTaskDone,
    deleteTask,
    doAllTasks,
    removeAllTasks,
    editTask,
    fetchExampleTasks,
    setExampleTasksLoading,
    setQuery,
} = tasksSlice.actions;
export const selectTasks = state => state.tasks.tasks;
export const selectIsHidingEnabled = state => state.tasks.isHidingEnabled;
export const selectExampleTasksLoading = state => state.tasks.exampleTasksLoading;
export const getTaskById = (state, taskId) => {
    return selectTasks(state).find(({ id }) => id === taskId);
};
export const selectQuery = state => state.tasks.query;
export const selectTasksByQuery = (state, query) => {
    if (!query || query.trim() === "") {
        return selectTasks(state);
    }

    return selectTasks(state).filter(
        ({ name }) => name.toLowerCase().includes(query.trim().toLowerCase())
    );
};
export const isAllTasksDone = ({ tasks }) => {
    return tasks.tasks.every(({ done }) => done);
};
export const isAllTasksUndone = ({ tasks }) => {
    return tasks.tasks.every(({ done }) => !done);
};

export default tasksSlice.reducer;