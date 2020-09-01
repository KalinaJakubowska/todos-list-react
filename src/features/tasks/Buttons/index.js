import React from "react";
import { ButtonsContainer, Button } from "./styled";

const Buttons = ({ tasks, isHidingEnabled, toggleIsHidingEnabled, doAllTasks }) => (
    <ButtonsContainer>
        {tasks.length > 0 && (
            <>
                <Button
                    disabled={tasks.every(({ done }) => !done)}
                    onClick={toggleIsHidingEnabled}
                >
                    {isHidingEnabled ? "Pokaż" : "Ukryj"} ukończone
                </Button>
                <Button
                    disabled={tasks.every(({ done }) => done)}
                    onClick={doAllTasks}
                >
                    Ukończ wszystkie
                </Button>
            </>
        )}
    </ButtonsContainer>
);
export default Buttons;