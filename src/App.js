import { Route, Routes } from "react-router-dom";
import HomePage1 from "./Components/Home/Page-1/HomePage1";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<HomePage1/> } />
     </Routes>
    </div>
  );
}

export default App;
