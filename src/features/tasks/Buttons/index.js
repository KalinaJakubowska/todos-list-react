import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ButtonsContainer, Button } from "./styled";
import { selectTasks, toggleIsHidingEnabled, doAllTasks } from "../tasksSlice";

const Buttons = () => {
    const { tasks, isHidingEnabled } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <ButtonsContainer>
            {tasks.length > 0 && (
                <>
                    <Button
                        disabled={tasks.every(({ done }) => !done)}
                        onClick={() => dispatch(toggleIsHidingEnabled())}
                    >
                        {isHidingEnabled ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        disabled={tasks.every(({ done }) => done)}
                        onClick={() => dispatch(doAllTasks())}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </ButtonsContainer>
    );
};
export default Buttons;