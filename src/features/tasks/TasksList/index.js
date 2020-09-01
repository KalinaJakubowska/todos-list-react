import React from "react";
import { List, Item, Content, Button } from "./styled.js";

const TasksList = ({ tasks, isHidingEnabled, deleteTask, toggleTaskDone }) => {
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
                    <Button toggleDone onClick={() => toggleTaskDone(id)}>
                        {done ? "✔" : ""}
                    </Button>
                    <Content done={done}>
                        {name}
                    </Content>
                    <Button remove onClick={() => deleteTask(id)}>
                        🗑
                    </Button>
                </Item>
            ))}
        </List>
    )
}
export default TasksList;