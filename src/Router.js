import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import Card from "./pages/Card";
import List from "./pages/List";



const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/list" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
