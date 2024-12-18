import Todo from "../pages/Todo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PersonData from "../pages/PersonData";
import MainContainer from "../container/mainContainer";
import { Typography } from "@mui/material";
const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainContainer />}>
          <Route path="/" element={<Home />} />
          <Route path="/Todo" element={<Todo />} />
          <Route path="/PersonDetails" element={<PersonData />} />
          <Route
            path="*"
            element={
              <Typography variant="h4" component="h4" sx={{ mt: 12 }}>
                Route not Found
              </Typography>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};
export default AllRoutes;
