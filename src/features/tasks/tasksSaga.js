import { call, delay, put, takeEvery } from "redux-saga/effects";
import { fetchExampleTasks, setTasks, setExampleTasksLoading } from "./tasksSlice";
import { getExampleTasks } from "./TasksList/getExampleTasks";

function* fetchExampleTasksHandler() {
    try {
        yield put(setExampleTasksLoading(true));
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
        yield put(setExampleTasksLoading(false));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak!");
        yield put(setExampleTasksLoading(false));
    }
};

export function* watchFetchExampleTasks() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
};