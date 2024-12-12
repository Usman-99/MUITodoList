import ResponsiveAppBar from "./layout/Header";
import Todo from "./pages/Todo";
import TodoItems from "./pages/TodoItems";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./layout/Footer";
const App = () => {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/TodoItems" element={<TodoItems />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
