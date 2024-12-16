import ResponsiveAppBar from "./layout/Header";
import Todo from "./pages/Todo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store/todostore";
import "./App.css"
import Footer from "./layout/Footer";
import PersonData from "./pages/PersonData";
const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/PersonDetails" element={<PersonData />} />
      </Routes>
      <Footer />
    </Router>
    </Provider>
  );
};
export default App;
