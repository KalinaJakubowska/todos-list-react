import React, { useState, useEffect } from 'react';
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
  const [isHidingEnabled, setIsHidingEnabled] = useState(false);
  const [tasks, setTasks] =
    useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]);

  const toggleIsHidingEnabled = () => {
    setIsHidingEnabled(isHidingEnabled => !isHidingEnabled);
  };
  const deleteTask = id => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };
  const toggleTaskDone = id => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done }
      }

      return task
    }));
  };
  const doAllTasks = () => {
    setTasks(tasks => tasks.map(task => ({ ...task, done: true })));
  };
  const addNewTask = (name) => {
    if (!name) {
      return;
    }
    setTasks(tasks => [
      ...tasks,
      {
        name,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };

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
          <List
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
