import { all } from "redux-saga/effects";
import { watchFetchExampleTasks, watchAllActions } from "./features/tasks/tasksSaga";

export default function* rootSaga() {
    yield all([
        watchFetchExampleTasks(),
        watchAllActions(),
    ])
}