import React, { useState } from 'react';
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
  const [isHidingEnabled, setIsHidingEnabled] = useState(false);
  const [tasks, setTasks] = useState(
    [
      { id: 1, name: "Pomiziać koty", done: true },
      { id: 2, name: "Powtórzyć punkt pierwszy", done: false },
    ]
  );
  const toggleHideDone = () => {
    setIsHidingEnabled(isHidingEnabled => !isHidingEnabled);
  };
  const deleteTask = id => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent=
        {<Buttons
          tasks={tasks}
          isHidingEnabled={isHidingEnabled}
          toggleHideDone={toggleHideDone}
        />}
        body=
        {<List
          tasks={tasks}
          isHidingEnabled={isHidingEnabled}
          deleteTask={deleteTask} />}
      />
    </Container>
  );
}
export default App;
