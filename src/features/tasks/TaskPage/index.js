import React from 'react';
import Section from "./../../../common/Section";
import Header from "./../../../common/Header";
import Container from "./../../../common/Container";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getTaskById } from '../tasksSlice';

const TaskPage = () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <Header title="Szczegóły zadania" />
            {task
                ? (
                    <Section
                        title={task.name}
                        body={
                            <>
                                <strong>Ukończono:</strong>
                                {task.done ? " Tak" : " Nie"}
                            </>
                        }
                    />
                )
                : (
                    <Section
                        title="Nie ma takiego zadania na liście"
                    />
                )
            }
        </Container>
    );
};
export default TaskPage;