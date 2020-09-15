import { call, delay, put, select, takeEvery } from "redux-saga/effects";
import { fetchExampleTasks, addTasks, setExampleTasksLoading, selectTasks } from "./tasksSlice";
import { getExampleTasks } from "./TasksPage/TasksList/getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
        yield put(setExampleTasksLoading(true));
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(addTasks(exampleTasks));
        yield put(setExampleTasksLoading(false));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak!");
        yield put(setExampleTasksLoading(false));
    }
};

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* watchFetchExampleTasks() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
};

export function* watchAllActions() {
    yield takeEvery("*", saveTasksInLocalStorageHandler);
};