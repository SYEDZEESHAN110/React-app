import Container from "./components/Container";
import NewEvent from "./pages/login/login";
import RenderForm from "./pages/login/login";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/login" element={<NewEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
