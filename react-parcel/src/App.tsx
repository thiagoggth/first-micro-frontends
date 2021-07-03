import React, { useEffect, useState } from "react";
import { listenEvent } from "@psg/utils";

export type Task = { id: string; description: string };

const App = ({ name }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    listenEvent<Task>("@psg/react-route/todo/add-task", (event) => {
      setTasks((oldTasks) => [...oldTasks, event.detail]);
    });
  }, []);

  return (
    <>
      <h1>{name}</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
