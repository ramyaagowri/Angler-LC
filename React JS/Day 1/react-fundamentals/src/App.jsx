import "./App.css";
import Axios from "./Components/ApiAxios.jsx";
import Fetch from "./Components/ApiFetch.jsx";
import Counter from "./Components/Class.jsx";
import ConditionalRendering from "./Components/ConditionalRendering.jsx";
import LifeCycleMethods from "./Components/LifeCycleMethods.jsx";
import ListsAndKeys from "./Components/ListsAndKeys.jsx";
import PropsAndState from "./Components/propsAndState.jsx";
import SimpleForm from "./Components/SimpleForm.jsx";

function App() {
  return (
    <>
      <Counter />
      <PropsAndState name="Ramyaa Gowri" />
      <LifeCycleMethods />
      <ConditionalRendering />
      <ListsAndKeys />
      <SimpleForm />
      <Fetch />
      <Axios />
    </>
  );
}

export default App;
