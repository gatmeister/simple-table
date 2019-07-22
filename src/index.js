import React from "react";
import ReactDOM from "react-dom";
import Table from "./table";
import "./styles.css";

const titles = [
  "Id",
  "Type",
  "Name",
  "Category",
  "Client",
  "Date",
  "Watched",
  "Amount",
  "State",
  "Delete"
];
const data = [
  {
    id: 23,
    type: "test",
    name: "joaaaahnny cageasdasdasd cageasdasdasd cageasdasdasd cageasdasdasd",
    category: "selasdasler",
    client: "custom",
    date: "01-01-2019",
    watched: "yes",
    amount: 1231,
    state: "pending",
    delete: "button"
  },
  {
    id: 211,
    type: "test",
    name: "johnny cage",
    category: "seller",
    client: "custsdsom",
    date: "01-01-2019",
    watched: "yes",
    amount: 1231,
    state: "pending",
    delete: "button"
  },
  {
    id: 2222,
    type: "test",
    name: "johnny cage",
    category: "seller",
    client: "custom",
    date: "01-01-2019",
    watched: "yes",
    amount: 1231,
    state: "pending",
    delete: "button"
  },
  {
    id: 2222,
    type: "test",
    name: "johnny cage",
    category: "seller",
    client: "custom",
    date: "01-01-2019",
    watched: "yes",
    amount: 1231,
    state: "pending",
    delete: "button"
  },
  {
    id: 2222,
    type: "test",
    name: "johnny cage",
    category: "seller",
    client: "custom",
    date: "01-01-2019",
    watched: "yes",
    amount: 1231,
    state: "pending",
    delete: "button"
  },
  {
    id: 2222,
    type: "test",
    name: "johnny cage",
    category: "seller",
    client: "custom",
    date: "01-01-2019",
    watched: "yes",
    amount: 1231,
    state: "pending",
    delete: "button"
  },
  {
    id: 2222,
    type: "test",
    name: "johnny cage",
    category: "seller",
    client: "custom",
    date: "01-01-2019",
    watched: "yes",
    amount: 1231,
    state: "pending",
    delete: "button"
  }
];
function App() {
  return (
    <div className="App">
      <Table columns={10} titles={titles} data={data} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
