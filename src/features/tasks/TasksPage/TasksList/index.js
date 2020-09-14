import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button, EditableContent, ContentInput } from "./styled.js";
import {
    selectTasksByQuery,
    selectIsHidingEnabled,
    toggleTaskDone,
    deleteTask,
    editTask,
    selectQuery,
} from "../../tasksSlice.js";
import { Link } from "react-router-dom";

const TasksList = () => {
    const query = useSelector(selectQuery);
    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const isHidingEnabled = useSelector(selectIsHidingEnabled);
    const [newTaskName, setNewTaskName] = useState("");
    const [editableId, setEditableId] = useState(0);

    const dispatch = useDispatch();

    if (!tasks.length) {
        return (
            <p>
                {query
                    ? "Brak pasujących zadań."
                    : "Aktualnie nie masz żadnych zadań do wykonania. Ciesz się wolnym czasem :)"
                }
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
                            <EditableContent as="form">
                                <ContentInput autoFocus value={newTaskName} onChange={({ target }) => setNewTaskName(target.value)} />
                                <Button save onClick={() => onEditSave(id, name)}>
                                    Zapisz
                                </Button>
                            </EditableContent>
                        )
                        : (
                            <EditableContent>
                                <Content done={done}>
                                    <Link to={`/zadania/${id}`}>{name}</Link>
                                </Content>
                                <Button edit onClick={() => setEditableId(id) || setNewTaskName(name)}>
                                    ✏
                                </Button>
                            </EditableContent>
                        )
                    }

                    < Button remove onClick={() => dispatch(deleteTask(id))}>
                        🗑
                    </Button >
                </Item>
            ))}
        </List>
    )
};
export default TasksList;