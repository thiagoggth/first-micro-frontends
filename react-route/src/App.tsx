import { emitEvent } from "@psg/utils";
import React, { useState } from "react";
import Parcel from "single-spa-react/parcel";
import { v4 as uuid } from "uuid";

type Task = { id: string; description: string };

const App = ({ name }) => {
  const [task, setTask] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    emitEvent<Task>("@psg/react-route/todo/add-task", {
      id: uuid(),
      description: task,
    });
    setTask("");
  };

  return (
    <>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={task} />
        <button>Add</button>
      </form>
      <Parcel config={() => System.import("@psg/react-parcel")} />
    </>
  );
};

export default App;
