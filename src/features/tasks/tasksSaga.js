import { call, delay, put, takeLatest } from "redux-saga/effects";
import { fetchExampleTasks, addTasks, setExampleTasksLoading } from "./tasksSlice";
import { getExampleTasks } from "./TasksPage/TasksList/getExampleTasks";

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

export function* watchFetchExampleTasks() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
};