import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ButtonsContainer} from "./styled";
import { Button } from "./../styled";
import {
    selectTasks,
    toggleIsHidingEnabled,
    doAllTasks,
    removeAllTasks,
} from "./../../tasksSlice";

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
                    <Button
                        onClick={() => dispatch(removeAllTasks())}
                    >
                        Usuń wszystkie
                    </Button>
                </>
            )}
        </ButtonsContainer>
    );
};
export default Buttons;