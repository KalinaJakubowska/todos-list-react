import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button } from "./styled.js";
import { selectTasks, toggleTaskDone, deleteTask } from "../tasksSlice.js";

const TasksList = () => {
    const { tasks, isHidingEnabled } = useSelector(selectTasks);

    const dispatch = useDispatch();

    if (!tasks.length) {
        return (
            <p>
                Aktualnie nie masz żadnych zadań do wykonania. Ciesz się wolnym czasem :)
            </p>
        );
    }

    return (
        <List>
            {tasks.map(({ id, name, done }) => (
                <Item
                    key={id}
                    hidden={done && isHidingEnabled}
                >
                    <Button toggleDone onClick={() => dispatch(toggleTaskDone(id))}>
                        {done ? "✔" : ""}
                    </Button>
                    <Content done={done}>
                        {name}
                    </Content>
                    <Button remove onClick={() => dispatch(deleteTask(id))}>
                        🗑
                    </Button>
                </Item>
            ))}
        </List>
    )
}
export default TasksList;