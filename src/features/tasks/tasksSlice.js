import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: JSON.parse(localStorage.getItem("tasks")) || [],
        isHidingEnabled: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleIsHidingEnabled: state => {
            state.isHidingEnabled = !state.isHidingEnabled;
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
    },
});

export const { addTask, toggleIsHidingEnabled, toggleTaskDone, deleteTask, doAllTasks } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;