// import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Refs from "./components/Refs";
import RefsUsage from "./components/RefsUsage";
import UseCallback from "./components/UseCallback";
import UseContextValue from "./components/UseContextValue";
import UseMemo from "./components/UseMemo";
import Counter from "./components/UseReducer";
import { ThemeProvider } from "./context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./store/counterSlice";

function App() {
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  dispatch(increment);
  console.log("Count Value ", countValue);
  return (
    <div>
      <Routes>
        <Route path="/" element={<RefsUsage />} />
        <Route path="/refs" element={<UseMemo />} />
      </Routes>
      <nav>
        <Link to="/"> Home</Link>
        <Link to="/refs">About</Link>
      </nav>
      <ThemeProvider>
        <UseContextValue />
        <Refs />
      </ThemeProvider>
      <RefsUsage />
      <UseMemo />
      <UseCallback />
      <Counter />
    </div>
  );
}

export default App;
