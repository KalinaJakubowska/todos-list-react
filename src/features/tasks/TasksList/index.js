import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button } from "./styled.js";
import { selectTasks, toggleTaskDone, deleteTask, editTask } from "../tasksSlice.js";

const TasksList = () => {
    const { tasks, isHidingEnabled } = useSelector(selectTasks);
    const [newTaskName, setNewTaskName] = useState("");
    const [editableId, setEditableId] = useState(0);

    const dispatch = useDispatch();

    if (!tasks.length) {
        return (
            <p>
                Aktualnie nie masz żadnych zadań do wykonania. Ciesz się wolnym czasem :)
            </p>
        );
    };

    const onEditSave = (id, name) => {
        dispatch(editTask({
            name: newTaskName.trim() || name,
            id,
        }));

        setEditableId(undefined);
    };

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

                    {editableId === id
                        ? (
                            <label>
                                <input value={newTaskName} onChange={({ target }) => setNewTaskName(target.value)} />

                                <Button edit onClick={() => onEditSave(id, name)}>
                                    Zapisz
                                </Button>
                            </label>
                        )
                        : (
                            <>
                                <Content done={done}>
                                    {name}
                                </Content>
                                <Button onClick={() => setEditableId(id) || setNewTaskName(name)}>
                                    ✏
                                </Button>
                            </>
                        )
                    }

                    < Button remove onClick={() => dispatch(deleteTask(id))}>
                        🗑
                    </Button >
                </Item>
            ))};
        </List>
    )
};
export default TasksList;