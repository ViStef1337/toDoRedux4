import './App.css'
import {Form} from "./components/Form/Form.jsx";
import {ToDoList} from "./components/ToDoList/ToDoList.jsx";
import {Filter} from "./components/Filter/Filter.jsx";

function App() {

  return (
    <>
      <Form/>
        <ToDoList/>
        <Filter/>
    </>
  )
}

export default App
