import React, { useState } from 'react';
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks"

function App() {
  const [isHidingEnabled, setIsHidingEnabled] = useState(false);

  const toggleIsHidingEnabled = () => {
    setIsHidingEnabled(isHidingEnabled => !isHidingEnabled);
  };

  const {
    tasks,
    deleteTask,
    toggleTaskDone,
    doAllTasks,
    addNewTask,
  } = useTasks();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            isHidingEnabled={isHidingEnabled}
            toggleIsHidingEnabled={toggleIsHidingEnabled}
            doAllTasks={doAllTasks}
          />
        }
        body={
          <TasksList
            tasks={tasks}
            isHidingEnabled={isHidingEnabled}
            deleteTask={deleteTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
      />
    </Container>
  );
};
export default App;