import React from "react";
import Routes from "./components/Routes";

const App: React.FC<{ name: string }> = ({ name }) => <Routes name={name} />;

export default App;
