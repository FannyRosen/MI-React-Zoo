import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Animal } from "./components/Animal";
import { Animals } from "./components/Animals";
import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Animals />}></Route>
            <Route path="/animal/:id" element={<Animal />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
