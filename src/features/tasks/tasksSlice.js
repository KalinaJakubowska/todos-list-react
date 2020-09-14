import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: getTasksFromLocalStorage(),
        isHidingEnabled: false,
        exampleTasksLoading: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
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
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
        setExampleTasksLoading: (state, { payload }) => {
            state.exampleTasksLoading = payload;
        },
    },
});

export const {
    addTask,
    toggleIsHidingEnabled,
    toggleTaskDone,
    deleteTask,
    doAllTasks,
    removeAllTasks,
    editTask,
    fetchExampleTasks,
    setTasks,
    setExampleTasksLoading,
} = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export const selectExampleTasksLoading = state => state.tasks.exampleTasksLoading;
export const getTaskById = (state, taskId) => {
    return selectTasks(state).tasks.find(({ id }) => id === taskId);
};

export default tasksSlice.reducer;