import { call, delay, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchExampleTasks, addTasks, setExampleTasksLoading, selectTasks } from "./tasksSlice";
import { getExampleTasks } from "./TasksPage/TasksList/getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
        yield put(setExampleTasksLoading(true));
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(addTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak!");
    } finally {
        yield put(setExampleTasksLoading(false));
    }
};

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* watchFetchExampleTasks() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
};

export function* watchEveryStateChange() {
    yield takeEvery("*", saveTasksInLocalStorageHandler);
};