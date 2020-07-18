import React, { useState } from 'react';
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, name: "Pomiziać koty", done: true },
  { id: 2, name: "Powtórzyć punkt pierwszy", done: false },
];

function App() {
  const [isHidingEnabled, setIsHidingEnabled] = useState(false);
  const toggleHideDone = () => {
    setIsHidingEnabled(isHidingEnabled => !isHidingEnabled);
  }

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
        body={<List tasks={tasks} isHidingEnabled={isHidingEnabled} />}
      />
    </Container>
  );
}
export default App;
